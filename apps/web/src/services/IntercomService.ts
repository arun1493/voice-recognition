import axios from "axios";

type CustomAttributes = {
  num_sign_ins?: number;
  oobe?: string;
};

const INTERCOM_USERS_URL = "https://api.intercom.io/users";

class IntercomService {
  public headers = {
    Authorization: `Bearer ${process.env.INTERCOM_API_TOKEN}`
  };

  fetchIntercomUser = async (userId: string) => {
    return axios
      .get(`${INTERCOM_USERS_URL}?user_id=${userId}`, {
        headers: this.headers
      })
      .then((response) => {
        return response?.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  updateIntercomUserAttributes = async (userId: string, customAttributes: CustomAttributes) => {
    const customUserAttributes = {
      user_id: userId,
      custom_attributes: customAttributes
    };

    return axios
      .post(INTERCOM_USERS_URL, customUserAttributes, { headers: this.headers })
      .then((response) => response.data);
  };
}

export default new IntercomService();
