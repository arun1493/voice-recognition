import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { logOut } from "../../../../helpers";

function handleLogout() {
  playSound(AgentSounds.END_OF_UTTERANCE);
  logOut();
}

export default handleLogout;
