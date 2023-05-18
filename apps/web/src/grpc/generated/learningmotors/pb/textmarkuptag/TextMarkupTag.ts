// Original file: node_modules/protobufs/src/learningmotors/pb/textmarkuptag/text_markup_tag.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/textmarkuptag/text_markup_tag.proto

export enum _learningmotors_pb_textmarkuptag_TextMarkupTag_Type {
  UNSPECIFIED = 0,
  DISCLAIMER = 1
}

export interface TextMarkupTag {
  type?:
    | _learningmotors_pb_textmarkuptag_TextMarkupTag_Type
    | keyof typeof _learningmotors_pb_textmarkuptag_TextMarkupTag_Type;
  start_tag?: string;
  end_tag?: string;
}

export interface TextMarkupTag__Output {
  type: keyof typeof _learningmotors_pb_textmarkuptag_TextMarkupTag_Type;
  start_tag: string;
  end_tag: string;
}
