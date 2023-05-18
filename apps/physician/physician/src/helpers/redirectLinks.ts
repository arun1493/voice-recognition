import { Environment } from "./environment";

const downloadLinks: { [key: string]: any } = {
  [Environment.Production]: {
    dotNet3: "https://storage.googleapis.com/windows-app.suki.ai/SukiAssistantSetup-SukiX(.NETCore3.1).msi",
    default: "https://storage.googleapis.com/windows-app.suki.ai/SukiAssistantSetup-SukiX(.NET6.0).msi",
    releaseNotes: "https://web-app-v2.suki.ai/windows-update"
  },
  [Environment.Stage]: {
    dotNet3: "https://storage.googleapis.com/windows-app.suki-stage.com/SukiAssistantSetup-SukiX(.NETCore3.1).msi",
    default: "https://storage.googleapis.com/windows-app.suki-stage.com/SukiAssistantSetup-SukiX(.NET6.0).msi",
    releaseNotes: "https://web-app-v2.suki-stage.com/windows-update"
  },
  [Environment.Test]: {
    dotNet3: "https://storage.googleapis.com/windows-app.suki-test.com/SukiAssistantSetup-SukiX(.NETCore3.1).msi",
    default: "https://storage.googleapis.com/windows-app.suki-test.com/SukiAssistantSetup-SukiX(.NET6.0).msi",
    releaseNotes: "https://web-app-v2.suki-test.com/windows-update"
  },
  [Environment.Development]: {
    dotNet3: "https://storage.googleapis.com/windows-app.suki-dev.com/SukiAssistantSetup-SukiX(.NETCore3.1).msi",
    default: "https://storage.googleapis.com/windows-app.suki-dev.com/SukiAssistantSetup-SukiX(.NET6.0).msi",
    releaseNotes: "https://web-app-v2.suki-dev.com/windows-update"
  },
  [Environment.Local]: {
    dotNet3: "https://storage.googleapis.com/windows-app.suki-dev.com/SukiAssistantSetup-SukiX(.NETCore3.1).msi",
    default: "https://storage.googleapis.com/windows-app.suki-dev.com/SukiAssistantSetup-SukiX(.NET6.0).msi",
    releaseNotes: "https://web-app-v2.suki-dev.com/windows-update"
  }
};

const getWindowsDownloadLink = (linkType = "default") => {
  const environment = process.env.NX_DEPLOYMENT_ENVIRONMENT as Environment;
  return downloadLinks[environment]?.[linkType] ?? downloadLinks[Environment.Local][linkType];
};

export { getWindowsDownloadLink };
