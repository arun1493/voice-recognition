import { useDispatch } from "react-redux";
import { FunctionComponent, useCallback } from "react";

import { useSocket } from "../../socket";
import { NoteActionHandler } from "../../types";
import { getReduxStoreState } from "../../redux/store";

function withActionHandlers(actionHandlers: Record<string, (payload: any) => void>) {
  return (WrappedComponent: FunctionComponent<any>): FunctionComponent => {
    return (props) => {
      const dispatch = useDispatch();
      const { transmitEvent } = useSocket();

      const handleAction = useCallback(
        ({ type, payload }: NoteActionHandler) => {
          const actionHandler = actionHandlers?.[type];
          if (actionHandler) {
            actionHandler({
              dispatch,
              getState: getReduxStoreState,
              payload,
              props,
              transmitEvent
            });
          }
        },
        [props]
      );

      return <WrappedComponent {...props} onAction={handleAction} />;
    };
  };
}

export { withActionHandlers };
