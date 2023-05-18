type EDGResponse = Array<Record<string, string>>;

type MappingICDCodes = Record<string, Array<string>>;

type EDG = {
  icd_10: string;
  edg: string;
};

type EDGData = EDG[];

export { EDG, EDGData, EDGResponse, MappingICDCodes };
