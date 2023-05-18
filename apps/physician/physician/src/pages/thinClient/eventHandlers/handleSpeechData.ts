import { thinClientActions } from "../../../redux/thinClient";
import { SocketEventHandlerAdditionalProps } from "../../../socket";

function handleSpeechData(payload: any, { dispatch, transmitEvent }: SocketEventHandlerAdditionalProps): void {
  dispatch(thinClientActions.updateSection({ payload }));
}

export default handleSpeechData;
