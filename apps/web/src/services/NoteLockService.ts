import qs from "qs";
import axios from "axios";

import { NOTE_FROM_QUEUE_BASE_URL } from "../constants";

class NoteLockService {
  async noteLockForEdit({ noteId, userId, organizationId }) {
    const options = {
      baseURL: NOTE_FROM_QUEUE_BASE_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify(
        { scribe_user_id: userId, scribe_org_id: organizationId, grab_note: true, note_id: noteId },
        { encodeValuesOnly: true, indices: false }
      )
    };

    return await axios({ ...options, method: "POST" });
  }
}

export default new NoteLockService();
