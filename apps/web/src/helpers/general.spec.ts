import * as general from "./general";
import { METADATA } from "../constants";
import { buildScope, getContentType, getContext, getDateFromString, getIds, sortBy, sortByStringKey } from "./general";

const dynamicSection = {
  name: "Allergies",
  navigation_keywords: [""],
  pbc_section_flag: "pbc_section_flag",
  id: "07a36131-8a23-4695-85f0-07cd56bb16e3",
  content: `{
    "object": "value",
    "document": {
      "object": "document",
      "data": {
        "editorVersion": "2.0.0"
      },
      "nodes": [
        {
          "object": "block",
          "type": "section",
          "data":{},
          "nodes": [
            {
              "object": "text",
              "type": "DYNAMIC_VITALS_TEMPLATE",
              "leaves": [
                {
                  "object": "leaf",
                  "text": "",
                  "marks": []
                }
              ]
            }
          ]
        }
      ]
    }
  }`
};

const sections = [
  {
    name: "Allergies",
    navigation_keywords: [""],
    pbc_section_flag: "pbc_section_flag",
    id: "07a36131-8a23-4695-85f0-07cd56bb16e3",
    content: `{
      "object": "value",
      "document": {
        "object": "document",
        "data": {
          "editorVersion": "2.0.0"
        },
        "nodes": [
          {
            "object": "block",
            "type": "section",
            "data":{},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      }
    }`
  }
];

describe("General helpers test", () => {
  it("sortByStringKey should return correct result", () => {
    const handler = (el: string) => ({ foo: el });
    const data = ["b", "c", "ab", "a", "d"].map(handler);
    const expected = ["a", "ab", "b", "c", "d"].map(handler);

    expect(sortByStringKey(data, "foo")).toStrictEqual(expected);
  });

  it("sortBy should return correct result", () => {
    const handler = (el: string) => ({ lastName: el });
    const data = ["Foo", "aA", "a", "AA", "Tt", "Bar"].map(handler);
    const expected = ["a", "aA", "AA", "Bar", "Foo", "Tt"].map(handler);

    expect(data.sort((a, b) => sortBy(a.lastName, b.lastName))).toStrictEqual(expected);
  });

  it("getDateFromString should return correct result", () => {
    const expected1 = { seconds: 1662359400, nanos: 0 };
    const expected2 = { seconds: 1639346340, nanos: 0 };
    const expected3 = { seconds: 1640728740, nanos: 0 };
    const expectedNaN = { seconds: NaN, nanos: NaN };

    expect(getDateFromString("09/05/2022 9:30")).toStrictEqual(expected1);
    expect(getDateFromString("12/12/2021 23:59")).toStrictEqual(expected2);
    expect(getDateFromString("12/28/2021 23:59")).toStrictEqual(expected3);
    expect(getDateFromString("28/12/2021 23:59")).toStrictEqual(expectedNaN);
    expect(getDateFromString("")).toStrictEqual(null);
  });

  it("buildScope works correct", () => {
    const ctx = {
      [METADATA.SUKI_ORGANIZATION_ID]: "11111"
    };
    expect(buildScope(ctx).organization_id).toStrictEqual("11111");
  });

  it("getIds works correct", () => {
    const input = {
      headers: {
        "x-suki-organization-id": "11111",
        "x-suki-user-id": "22222"
      }
    };
    expect(getIds(input).userId).toStrictEqual("22222");
    expect(getIds(input).organizationId).toStrictEqual("11111");
  });

  it("getContext works correct", () => {
    const getIds = jest.spyOn(general, "getIds");
    getIds.mockImplementation(() => ({ userId: undefined, organizationId: "11111" }));
    const input = {
      headers: {
        "x-suki-organization-id": "11111"
      }
    };
    expect(getContext(input).suki_organization_id).toStrictEqual("11111");
  });

  it("getContentType should work correctly", () => {
    expect(getContentType(sections)).toStrictEqual("STATIC");
    expect(getContentType([dynamicSection])).toStrictEqual("DYNAMIC");
  });
});
