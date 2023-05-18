const REDIRECT_URL = "https://www.suki.ai/requirements";

const SUPPORTED_BROWSERS: { [key: string]: number } = {
  "Chrome": 70,
  "Edge": 91,
  "Electron": 8,
  "Firefox": 103,
  "Safari": 15,
  "Mobile Chrome": 70,
  "Mobile Safari": 13,
  "Mobile Edge": 91
};

const DEVICE_TYPES = {
  desktop: "desktop",
  mobile: "mobile",
  tablet: "tablet"
};

export { DEVICE_TYPES, REDIRECT_URL, SUPPORTED_BROWSERS };
