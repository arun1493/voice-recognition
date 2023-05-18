import _forEach from "lodash/forEach";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { NoteSection } from "../types";
import { getReduxStoreState } from "../redux/store";
import { getOktaIdToken, getProblemSections, isValidIdToken } from "../helpers";
import { selectActiveSectionId, selectCurrentComposition } from "../redux/note";
import { compositionReader, metadataReader, patientReader, sectionReader } from "../readers";
import { Socket, SocketContext, SocketEventHandler, SocketReceiveEvent, SocketTransmitEvent } from ".";

function useSocket() {
  const socketInstance = Socket.getInstance();

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const composition = useSelector(selectCurrentComposition);
  const activeSectionId = useSelector(selectActiveSectionId);

  const contextRef = useRef<SocketContext>();

  const oktaIdToken = getOktaIdToken();

  useEffect(() => {
    const compositionId = compositionReader.compositionId(composition);
    const metadata = compositionReader.metadata(composition);
    const patient = metadataReader.patient(metadata);
    const noteTypeId = metadataReader.noteTypeId(metadata);

    const patientId = patientReader.id(patient);

    const problemSections = getProblemSections(composition);
    const problemSectionIdsAndNamesMap = problemSections?.map(
      (section: NoteSection) => `${sectionReader.sectionId(section)}:${sectionReader.sectionName(section)}`
    );

    contextRef.current = {
      compositionId,
      location,
      noteTypeId,
      patientId,
      problemBasedSections: problemSectionIdsAndNamesMap,
      sectionId: activeSectionId
    };
  }, [activeSectionId, composition, location]);

  const transmitEvent = (event: SocketTransmitEvent) => {
    socketInstance.transmitEvent(event, contextRef.current);
  };

  const handleEventResponse = (handler: SocketEventHandler) => (socketResponse: any) => {
    handler(socketResponse, {
      dispatch,
      getReduxStoreState,
      navigate,
      location: contextRef.current?.location,
      socket: socketInstance,
      transmitEvent
    });
  };

  const registerEvent = (event: SocketReceiveEvent) => {
    const { handler, override, type } = event;
    socketInstance.registerEvent(type, handleEventResponse(handler), override);
  };

  const registerEvents = (events: Array<SocketReceiveEvent>) => {
    _forEach(events, registerEvent);
  };

  const unRegisterEventType = (event: SocketReceiveEvent) => {
    const { type } = event;
    socketInstance.unRegisterEventType(type);
  };

  const unRegisterEvents = (events: Array<SocketReceiveEvent>) => {
    _forEach(events, unRegisterEventType);
  };

  const terminateSocket = () => {
    socketInstance.terminate();
  };

  useEffect(() => {
    const isValidIdTokenAsync = async () => {
      if (await isValidIdToken(oktaIdToken)) {
        socketInstance.initiateConnection();
      } else {
        socketInstance.terminate();
      }
    };
    isValidIdTokenAsync();
  }, [oktaIdToken, socketInstance]);

  return {
    registerEvents,
    terminateSocket,
    transmitEvent,
    unRegisterEvents
  };
}

export { useSocket };
