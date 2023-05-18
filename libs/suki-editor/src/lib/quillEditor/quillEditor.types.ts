import { UpdateType } from "../../constants";

type QuillFormatType = string[];

type QuillHistoryModuleType = {
  delay?: number;
  maxStack?: number;
  userOnly?: boolean;
};

type QuillMentionModuleType = {
  allowedChars: any;
  mentionDenotationChars: string[];
  source: any;
};

type QuillKeyboardModuleType = {
  bindings: {
    tab: {
      key: number;
      handler: () => boolean;
    };
  };
};

type QuillModuleType = {
  clipboard?: any;
  history?: QuillHistoryModuleType;
  keyboard?: QuillKeyboardModuleType;
  mention?: QuillMentionModuleType;
  toolbar?: boolean;
};

type QuillOnChangePropsType = {
  content: string;
  cursorPosition: number;
  plainText: string;
  historyStack: any;
  updateType?: UpdateType;
};

export {
  QuillFormatType,
  QuillHistoryModuleType,
  QuillKeyboardModuleType,
  QuillMentionModuleType,
  QuillModuleType,
  QuillOnChangePropsType
};
