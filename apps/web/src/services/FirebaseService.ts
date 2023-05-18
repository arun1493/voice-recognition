import admin from "firebase-admin";

class FirebaseService {
  constructor() {
    try {
      admin.initializeApp({
        credential: admin.credential.cert("/etc/secretspath/firebase-adminsdk.json")
      });
    } catch (e) {
      console.log("Failed to initialize firebase");
    }
  }

  getRemoteConfig = () => {
    const remoteConfig = admin.remoteConfig();
    return remoteConfig
      .getTemplate()
      .then((template) => template)
      .catch((error) => {
        console.error(`Failed to fetch remote config: ${JSON.stringify(error)}`);
        throw new Error(error);
      });
  };

  validateRemoteConfigTemplate = (remoteConfigTemplate) => {
    const remoteConfig = admin.remoteConfig();
    return remoteConfig
      .validateTemplate(remoteConfigTemplate)
      .then((validatedTemplate) => validatedTemplate)
      .catch((error) => {
        console.error(`Failed to validate remote config template: ${JSON.stringify(error)}`);
        throw new Error(error);
      });
  };

  publishRemoteConfigTemplate = (remoteConfigTemplate) => {
    const remoteConfig = admin.remoteConfig();
    return remoteConfig
      .publishTemplate(remoteConfigTemplate)
      .then((updatedRemoteConfigTemplate) => updatedRemoteConfigTemplate)
      .catch((error) => {
        console.error(`Failed to publish remote config template: ${JSON.stringify(error)}`);
        throw new Error(error);
      });
  };
}

export default new FirebaseService();
