import { s2SourceTypes } from "./s2SourceTypes";

const deltaEmpty = {
  ops: [{ insert: "\n" }]
};

const deltaExample1 = {
  ops: [
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "How now brown",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "cow.",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "The",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: " rain in Spain still stains",
      attributes: {
        type: s2SourceTypes.TYPED_DOCTOR
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.TYPED_DOCTOR
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_NVOQ
      }
    },
    { insert: "\n" }
  ]
};

const deltaExample2 = {
  ops: [
    {
      insert: "A",
      attributes: {
        type: s2SourceTypes.ASR_NVOQ
      }
    },
    {
      insert: "B",
      attributes: {
        type: s2SourceTypes.ASR_GOOGLE
      }
    },
    {
      insert: "C",
      attributes: {
        type: s2SourceTypes.ASR_HOMEGROWN
      }
    },
    {
      insert: "D",
      attributes: {
        type: s2SourceTypes.TYPED_DOCTOR
      }
    },
    {
      insert: "E",
      attributes: {
        type: s2SourceTypes.TYPED_ADMIN
      }
    },
    {
      insert: "F",
      attributes: {
        type: s2SourceTypes.TYPED_SCRIBE
      }
    },
    {
      insert: "G",
      attributes: {
        type: s2SourceTypes.SCRIPT
      }
    },
    {
      insert: "H",
      attributes: {
        type: s2SourceTypes.COPY_FORWARD
      }
    },
    {
      insert: "I",
      attributes: {
        type: s2SourceTypes.NOTETYPE_PREFILLED
      }
    },
    {
      insert: "J",
      attributes: {
        type: s2SourceTypes.UNKNOWN
      }
    },
    {
      insert: "\n"
    }
  ]
};

const deltaExample3 = {
  ops: [
    {
      insert: "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, ",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "Yes Fatigue",
      attributes: {
        type: "TYPED_SCRIBE",
        italic: true
      }
    },
    {
      insert: ", No Malaise",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "ENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Eyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "Cardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Respiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Gastrointestinal: ",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "Yes Nausea",
      attributes: {
        type: "TYPED_SCRIBE",
        italic: true,
        bold: true
      }
    },
    {
      insert: ", ",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "Yes Vomiting",
      attributes: {
        type: "TYPED_SCRIBE",
        italic: true
      }
    },
    {
      insert:
        ", No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "Genitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "Musculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Skin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "Neuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert:
        "Psych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Heme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: "UNKNOWN"
      }
    },
    {
      insert: "Endocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
      attributes: {
        type: "SCRIPT"
      }
    },
    {
      insert: "\n"
    }
  ]
};

const deltaExample5 = {
  ops: [{ insert: "bloop\n" }]
};

const deltaExampleS2V2 = {
  ops: [
    {
      insert: "A",
      attributes: {
        type: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "B",
      attributes: {
        type: s2SourceTypes.ASR_GOOGLE
      }
    },
    {
      insert: "C",
      attributes: {
        type: s2SourceTypes.ASR_HOMEGROWN
      }
    },
    {
      insert: "D",
      attributes: {
        type: s2SourceTypes.DOCTOR_TYPED
      }
    },
    {
      insert: "E",
      attributes: {
        type: s2SourceTypes.TYPED_ADMIN
      }
    },
    {
      insert: "F",
      attributes: {
        type: s2SourceTypes.OPS_TYPED
      }
    },
    {
      insert: "G",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "H",
      attributes: {
        type: s2SourceTypes.COPY_FORWARD
      }
    },
    {
      insert: "I",
      attributes: {
        type: s2SourceTypes.PREPOPULATED
      }
    },
    {
      insert: "J",
      attributes: {
        type: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "\n"
    }
  ]
};

const deltaExampleV24 = {
  ops: [
    {
      insert: "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, ",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "Yes Fatigue",
      attributes: {
        type: s2SourceTypes.OPS_TYPED,
        italic: true
      }
    },
    {
      insert: ", No Malaise",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "ENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Eyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "Cardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Respiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Gastrointestinal: ",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "Yes Nausea",
      attributes: {
        type: s2SourceTypes.OPS_TYPED,
        bold: true,
        italic: true
      }
    },
    {
      insert: ", ",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "Yes Vomiting",
      attributes: {
        type: s2SourceTypes.OPS_TYPED,
        italic: true
      }
    },
    {
      insert:
        ", No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "Genitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "Musculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Skin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "Neuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert:
        "Psych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Heme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.DEFAULT
      }
    },
    {
      insert: "Endocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
      attributes: {
        type: s2SourceTypes.SCRIPT_CONTENT
      }
    },
    {
      insert: "\n"
    }
  ]
};

const deltaV2Example1 = {
  ops: [
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "How now brown",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "cow.",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "\n\n",
      attributes: {
        blockType: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: "The",
      attributes: {
        bold: true,
        italic: true,
        type: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    {
      insert: " rain in Spain still stains",
      attributes: {
        type: s2SourceTypes.DOCTOR_TYPED
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.DOCTOR_TYPED
      }
    },
    {
      insert: "\n",
      attributes: {
        blockType: s2SourceTypes.ASR_TRANSCRIPT
      }
    },
    { insert: "\n" }
  ]
};

const s2Empty = `{
  "number_of_strings": 0,
  "total_string_length": 0,
  "total_string": "",
  "content": []
}`;

const s2EmptyObj = {
  number_of_strings: 0,
  total_string_length: 0,
  total_string: "",
  content: []
};

const s2Example1 = `{
  "number_of_strings": 3,
  "total_string_length": 54,
  "total_string": "\\nHow now brown\\ncow.\\n\\nThe rain in Spain still stains\\n\\n\\n",
  "content": [
    {
      "id": 0,
      "start_offset": 0,
      "end_offset": 23,
      "string": "\\nHow now brown\\ncow.\\n\\nThe",
      "length_of_string": 24,
      "is_bold": 1,
      "is_italic": 1,
      "source": "ASR_NVOQ"
    },
    {
      "id": 1,
      "start_offset": 24,
      "end_offset": 52,
      "string": " rain in Spain still stains\\n",
      "length_of_string": 28,
      "is_bold": 0,
      "is_italic": 0,
      "source": "TYPED_DOCTOR"
    },
    {
      "id": 2,
      "start_offset": 25,
      "end_offset": 26,
      "string": "\\n",
      "length_of_string": 1,
      "is_bold": 0,
      "is_italic": 0,
      "source": "ASR_NVOQ"
    }
  ]
}`;

const s2Example2 = {
  number_of_strings: 9,
  total_string_length: 53,
  total_string: "\nHow now brown\ncow.\n\nThe rain in Spain still stains\n\n",
  content: [
    {
      id: 0,
      start_offset: 0,
      end_offset: 0,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 1,
      start_offset: 1,
      end_offset: 13,
      string: "How now brown",
      length_of_string: 13,
      is_bold: 1,
      is_italic: 1,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 2,
      start_offset: 14,
      end_offset: 14,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 3,
      start_offset: 15,
      end_offset: 18,
      string: "cow.",
      length_of_string: 4,
      is_bold: 1,
      is_italic: 1,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 4,
      start_offset: 19,
      end_offset: 20,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 5,
      start_offset: 21,
      end_offset: 23,
      string: "The",
      length_of_string: 3,
      is_bold: 1,
      is_italic: 1,
      source: s2SourceTypes.ASR_NVOQ
    },
    {
      id: 6,
      start_offset: 24,
      end_offset: 50,
      string: " rain in Spain still stains",
      length_of_string: 27,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.TYPED_DOCTOR
    },
    {
      id: 7,
      start_offset: 51,
      end_offset: 51,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.TYPED_DOCTOR
    },
    {
      id: 8,
      start_offset: 52,
      end_offset: 52,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: s2SourceTypes.ASR_NVOQ
    }
  ]
};

const s2Example3 = {
  content: [
    {
      id: 0,
      start_offset: 0,
      end_offset: 0,
      string: "A",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "ASR_NVOQ"
    },
    {
      id: 1,
      start_offset: 1,
      end_offset: 1,
      string: "B",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "ASR_GOOGLE"
    },
    {
      id: 2,
      start_offset: 2,
      end_offset: 2,
      string: "C",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "ASR_HOMEGROWN"
    },
    {
      id: 3,
      start_offset: 3,
      end_offset: 3,
      string: "D",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "TYPED_DOCTOR"
    },
    {
      id: 4,
      start_offset: 4,
      end_offset: 4,
      string: "E",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "TYPED_ADMIN"
    },
    {
      id: 5,
      start_offset: 5,
      end_offset: 5,
      string: "F",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "TYPED_SCRIBE"
    },
    {
      id: 6,
      start_offset: 6,
      end_offset: 6,
      string: "G",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 7,
      start_offset: 7,
      end_offset: 7,
      string: "H",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "COPY_FORWARD"
    },
    {
      id: 8,
      start_offset: 8,
      end_offset: 8,
      string: "I",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "NOTETYPE_PREFILLED"
    },
    {
      id: 9,
      start_offset: 9,
      end_offset: 9,
      string: "J",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    }
  ]
};

const s2Example4 = {
  number_of_strings: 31,
  total_string_length: 1661,
  total_string:
    "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, Yes Fatigue, No Malaise\n\nENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty\n\nEyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes\n\nCardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations\n\nRespiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea\n\nGastrointestinal: Yes Nausea, Yes Vomiting, No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice\n\nGenitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy\n\nMusculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History\n\nSkin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge\n\nNeuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls\n\nPsych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns\n\nHeme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy\nEndocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
  content: [
    {
      id: 0,
      start_offset: 0,
      end_offset: 71,
      string: "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, ",
      length_of_string: 72,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 1,
      start_offset: 72,
      end_offset: 82,
      string: "Yes Fatigue",
      length_of_string: 11,
      is_bold: 0,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 2,
      start_offset: 83,
      end_offset: 94,
      string: ", No Malaise",
      length_of_string: 12,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 3,
      start_offset: 95,
      end_offset: 96,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 4,
      start_offset: 97,
      end_offset: 246,
      string:
        "ENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty",
      length_of_string: 150,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 5,
      start_offset: 247,
      end_offset: 248,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 6,
      start_offset: 249,
      end_offset: 340,
      string: "Eyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes",
      length_of_string: 92,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 7,
      start_offset: 341,
      end_offset: 342,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 8,
      start_offset: 343,
      end_offset: 469,
      string:
        "Cardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations",
      length_of_string: 127,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 9,
      start_offset: 470,
      end_offset: 471,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 10,
      start_offset: 472,
      end_offset: 547,
      string: "Respiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea",
      length_of_string: 76,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 11,
      start_offset: 548,
      end_offset: 549,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 12,
      start_offset: 550,
      end_offset: 567,
      string: "Gastrointestinal: ",
      length_of_string: 18,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 13,
      start_offset: 568,
      end_offset: 577,
      string: "Yes Nausea",
      length_of_string: 10,
      is_bold: 1,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 14,
      start_offset: 578,
      end_offset: 579,
      string: ", ",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 15,
      start_offset: 580,
      end_offset: 591,
      string: "Yes Vomiting",
      length_of_string: 12,
      is_bold: 0,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 16,
      start_offset: 592,
      end_offset: 727,
      string:
        ", No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice",
      length_of_string: 136,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 17,
      start_offset: 728,
      end_offset: 729,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 18,
      start_offset: 730,
      end_offset: 922,
      string:
        "Genitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy",
      length_of_string: 193,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 19,
      start_offset: 923,
      end_offset: 924,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 20,
      start_offset: 925,
      end_offset: 1054,
      string:
        "Musculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History",
      length_of_string: 130,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 21,
      start_offset: 1055,
      end_offset: 1056,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 22,
      start_offset: 1057,
      end_offset: 1152,
      string: "Skin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge",
      length_of_string: 96,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 23,
      start_offset: 1153,
      end_offset: 1154,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 24,
      start_offset: 1155,
      end_offset: 1309,
      string:
        "Neuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls",
      length_of_string: 155,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 25,
      start_offset: 1310,
      end_offset: 1311,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 26,
      start_offset: 1312,
      end_offset: 1511,
      string:
        "Psych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns",
      length_of_string: 200,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 27,
      start_offset: 1512,
      end_offset: 1513,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 28,
      start_offset: 1514,
      end_offset: 1594,
      string: "Heme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy",
      length_of_string: 81,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 29,
      start_offset: 1595,
      end_offset: 1595,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 30,
      start_offset: 1596,
      end_offset: 1660,
      string: "Endocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
      length_of_string: 65,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    }
  ]
};

const s2Example5 = {
  number_of_strings: 31,
  total_string_length: 1661,
  total_string:
    "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, Yes Fatigue, No Malaise\n" +
    "\n" +
    "ENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty\n" +
    "\n" +
    "Eyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes\n" +
    "\n" +
    "Cardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations\n" +
    "\n" +
    "Respiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea\n" +
    "\n" +
    "Gastrointestinal: Yes Nausea, Yes Vomiting, No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice\n" +
    "\n" +
    "Genitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy\n" +
    "\n" +
    "Musculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History\n" +
    "\n" +
    "Skin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge\n" +
    "\n" +
    "Neuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls\n" +
    "\n" +
    "Psych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns\n" +
    "\n" +
    "Heme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy\n" +
    "Endocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
  content: [
    {
      id: 0,
      start_offset: 0,
      end_offset: 71,
      string: "Constitutional: No Weight Change, No Fever, No Chills, No Night Sweats, ",
      length_of_string: 72,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 1,
      start_offset: 72,
      end_offset: 82,
      string: "Yes Fatigue",
      length_of_string: 11,
      is_bold: 0,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 2,
      start_offset: 83,
      end_offset: 94,
      string: ", No Malaise",
      length_of_string: 12,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 3,
      start_offset: 95,
      end_offset: 96,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 4,
      start_offset: 97,
      end_offset: 246,
      string:
        "ENT/Mouth: No Hearing Changes, No Ear Pain, No Nasal Congestion, No Sinus Pain, No Hoarseness, No sore throat, No Rhinorrhea, No Swallowing Difficulty",
      length_of_string: 150,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 5,
      start_offset: 247,
      end_offset: 248,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 6,
      start_offset: 249,
      end_offset: 340,
      string: "Eyes: No Eye Pain, No Swelling, No Redness, No Foreign Body, No Discharge, No Vision Changes",
      length_of_string: 92,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 7,
      start_offset: 341,
      end_offset: 342,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 8,
      start_offset: 343,
      end_offset: 469,
      string:
        "Cardiovascular: No Chest Pain, No SOB, No PND, No Dyspnea on Exertion, No Orthopnea, No claudication, No Edema, No Palpitations",
      length_of_string: 127,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 9,
      start_offset: 470,
      end_offset: 471,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 10,
      start_offset: 472,
      end_offset: 547,
      string: "Respiratory: No Cough, No Sputum, No Wheezing, No Smoke Exposure, No Dyspnea",
      length_of_string: 76,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 11,
      start_offset: 548,
      end_offset: 549,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 12,
      start_offset: 550,
      end_offset: 567,
      string: "Gastrointestinal: ",
      length_of_string: 18,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 13,
      start_offset: 568,
      end_offset: 577,
      string: "Yes Nausea",
      length_of_string: 10,
      is_bold: 1,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 14,
      start_offset: 578,
      end_offset: 579,
      string: ", ",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 15,
      start_offset: 580,
      end_offset: 591,
      string: "Yes Vomiting",
      length_of_string: 12,
      is_bold: 0,
      is_italic: 1,
      source: "TYPED_SCRIBE"
    },
    {
      id: 16,
      start_offset: 592,
      end_offset: 727,
      string:
        ", No Diarrhea, No Constipation, No Pain, No Heartburn, No Anorexia, No Dysphagia, No Hematochezia, No Melena, No Flatulence, No Jaundice",
      length_of_string: 136,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 17,
      start_offset: 728,
      end_offset: 729,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 18,
      start_offset: 730,
      end_offset: 922,
      string:
        "Genitourinary: No Dysmenorrhea, No DUB, No Dyspareunia, No Dysuria, No Urinary Frequency, No Hematuria, No Urinary Incontinence, No Urgency, No Flank Pain, No Urinary Flow Changes, No Hesitancy",
      length_of_string: 193,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 19,
      start_offset: 923,
      end_offset: 924,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 20,
      start_offset: 925,
      end_offset: 1054,
      string:
        "Musculoskeletal: No Arthralgias, No Myalgias, No Joint Swelling, No Joint Stiffness, No Back Pain, No Neck Pain, No Injury History",
      length_of_string: 130,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 21,
      start_offset: 1055,
      end_offset: 1056,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 22,
      start_offset: 1057,
      end_offset: 1152,
      string: "Skin: No Skin Lesions, No Pruritis, No Hair Changes, No Breast/Skin Changes, No Nipple Discharge",
      length_of_string: 96,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 23,
      start_offset: 1153,
      end_offset: 1154,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 24,
      start_offset: 1155,
      end_offset: 1309,
      string:
        "Neuro: No Weakness, No Numbness, No Paresthesias, No Loss of Consciousness, No Syncope, No Dizziness, No Headache, No Coordination Changes, No Recent Falls",
      length_of_string: 155,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 25,
      start_offset: 1310,
      end_offset: 1311,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 26,
      start_offset: 1312,
      end_offset: 1511,
      string:
        "Psych: No Anxiety/Panic, No Depression, No Insomnia, No Personality Changes, No Delusions, No Rumination, No SI/HI/AH/VH, No Social Issues, No Memory Changes, No Violence/Abuse Hx., No Eating Concerns",
      length_of_string: 200,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 27,
      start_offset: 1512,
      end_offset: 1513,
      string: "\n\n",
      length_of_string: 2,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 28,
      start_offset: 1514,
      end_offset: 1594,
      string: "Heme/Lymph: No Bruising, No Bleeding, No Transfusions History, No Lymphadenopathy",
      length_of_string: 81,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    },
    {
      id: 29,
      start_offset: 1595,
      end_offset: 1595,
      string: "\n",
      length_of_string: 1,
      is_bold: 0,
      is_italic: 0,
      source: "UNKNOWN"
    },
    {
      id: 30,
      start_offset: 1596,
      end_offset: 1660,
      string: "Endocrine: No Polyuria, No Polydipsia, No Temperature Intolerance",
      length_of_string: 65,
      is_bold: 0,
      is_italic: 0,
      source: "SCRIPT"
    }
  ]
};

const s2Example6 = {
  number_of_strings: 1,
  total_string_length: 5,
  total_string: "bloop",
  content: [
    {
      id: 0,
      start_offset: 0,
      end_offset: 4,
      string: "bloop",
      length_of_string: 5,
      is_bold: 0,
      is_italic: 0,
      source: "TYPED_DOCTOR"
    }
  ]
};

export {
  deltaEmpty,
  deltaExample1,
  deltaExample2,
  deltaExample3,
  deltaExample5,
  deltaExampleS2V2,
  deltaExampleV24,
  deltaV2Example1,
  s2Empty,
  s2EmptyObj,
  s2Example1,
  s2Example2,
  s2Example3,
  s2Example4,
  s2Example5,
  s2Example6
};
