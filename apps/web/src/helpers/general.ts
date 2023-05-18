import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { compareDesc } from "date-fns";
import _cloneDeep from "lodash/cloneDeep";

import { CONTENT_TYPE, DYNAMIC_VITALS_TEMPLATE, METADATA, SUKI_ORGANIZATION_ID } from "../constants";

const handleErrorResponse = (res) => {
  return (responseCode, errMessage) => {
    console.error(errMessage);
    res.status(responseCode).json({
      error: {
        code: responseCode,
        message: errMessage
      }
    });
  };
};

const sortByStringKey = (arr, key) => {
  const sortedArray = _cloneDeep(arr);
  sortedArray.sort((a, b) => {
    a = _get(a, key, "").toUpperCase();
    b = _get(b, key, "").toUpperCase();

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  return sortedArray;
};

const sortBy = (a: string, b: string) => {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
};

const getTimeStamp = (time) => {
  const seconds = Math.floor(time / 1000);
  const nanos = (time % 1000) * 1e6;

  return { seconds, nanos };
};

const sortNotesByDate = (notes) => {
  const sortedNotes = _cloneDeep(notes);
  sortedNotes.sort((a, b) => {
    const aSortBy = new Date(a.metadata.appointment?.startsAt || a.createdAt || a.compositionCreatedAt);
    const bSortBy = new Date(b.metadata.appointment?.startsAt || b.createdAt || b.compositionCreatedAt);
    return compareDesc(aSortBy, bSortBy);
  });
  return sortedNotes;
};

const getIds = (input) => {
  const organizationId = _get(input, "headers.x-suki-organization-id", SUKI_ORGANIZATION_ID);
  const sukiS2Client = _get(input, "headers.x-suki-s2-client", true);
  const userAgent = _get(input, "headers.x-suki-user-agent");
  const userId = _get(input, "headers.x-suki-user-id");
  return { organizationId, sukiS2Client, userAgent, userId };
};

const getContext = (input, includeUserId = false, customInput = false) => {
  const { organizationId, sukiS2Client, userId } = customInput ? input : getIds(input);
  const authorization = _get(input, "headers.authorization");
  const ctx = {
    [METADATA.SUKI_JWT]: authorization,
    [METADATA.SUKI_ORGANIZATION_ID]: organizationId,
    [METADATA.SUKI_S2_CLIENT]: sukiS2Client
  };

  return includeUserId ? { ...ctx, [METADATA.SUKI_USER_ID]: userId } : ctx;
};

const buildScope = (ctx) => ({
  organization_id: ctx[METADATA.SUKI_ORGANIZATION_ID]
});

const getDateFromString = (dateStr) => (dateStr ? getTimeStamp(new Date(dateStr).getTime()) : null);

const getContentType = (blocks) => {
  if (_isEmpty(blocks)) return CONTENT_TYPE.STATIC;
  try {
    const isDynamic = blocks.some((block) => {
      const content = JSON.parse(block.content);
      const nodes = content.document.nodes[0].nodes;
      return nodes.some((node) => node.type === DYNAMIC_VITALS_TEMPLATE);
    });

    if (isDynamic) return CONTENT_TYPE.DYNAMIC;
    return CONTENT_TYPE.STATIC;
  } catch (err) {
    console.error("Unable to parse script content", err);
    return CONTENT_TYPE.STATIC;
  }
};

const isCompositionForEncounterId = (encounterId) => (composition) =>
  _get(composition, "metadata.appointment.emr_encounter_id") === encounterId;

const filterContent = (contentS2) => {
  const contentArray = contentS2.content;
  const content = contentArray.map((item) => {
    item.string = item.string.replace(/\n\+/, "\n");
    item.string = item.string.replace(/^\+/, "");
    return item;
  });
  return { content };
};

const getUrlWithQueryParams = (url: string, obj: any) => {
  // Create an instance of URLSearchParams
  const params = new URLSearchParams();

  // Iterate through the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Append key-value pair to the query string
      params.append(key, value);
    }
  }

  // Return the query string
  return url + params.toString();
};

export {
  buildScope,
  filterContent,
  getContentType,
  getContext,
  getDateFromString,
  getIds,
  getUrlWithQueryParams,
  handleErrorResponse,
  isCompositionForEncounterId,
  sortBy,
  sortByStringKey,
  sortNotesByDate
};
