import { ModalSubType } from "../../../redux/modals";
import { WHAT_CAN_I_SAY_TYPE } from "../../../constants";

const optionsTranslationKey = (type: ModalSubType) => {
  switch (type) {
    case WHAT_CAN_I_SAY_TYPE.NOTE:
      return "modals.whatCanISay.noteOptions";
    case WHAT_CAN_I_SAY_TYPE.EMBED:
      return "modals.whatCanISay.embedOptions";
    case WHAT_CAN_I_SAY_TYPE.INTEGRATED_PATIENT_PROFILE:
      return "modals.whatCanISay.integratedPatientProfileOptions";
    case WHAT_CAN_I_SAY_TYPE.GENERAL:
    default:
      return "modals.whatCanISay.options";
  }
};

const getHeight = (type: ModalSubType, isSmallScreen: boolean) => {
  if (type === WHAT_CAN_I_SAY_TYPE.EMBED) {
    return { height: 434, contentHeight: 352 };
  }
  return isSmallScreen ? { height: 456, contentHeight: 380 } : { height: 608, contentHeight: 528 };
};

export { getHeight, optionsTranslationKey };
