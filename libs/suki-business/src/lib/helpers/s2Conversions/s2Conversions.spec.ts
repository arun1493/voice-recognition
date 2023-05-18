import {
  deltaEmpty,
  deltaExample1,
  deltaExample2,
  deltaExample3,
  deltaExample5,
  deltaExampleS2V2,
  deltaExampleV24,
  deltaV2Example1,
  EditorTypes,
  Personas,
  s2Empty,
  s2EmptyObj,
  s2Example1,
  s2Example2,
  s2Example3,
  s2Example4,
  s2Example5,
  s2Example6
} from "../../constants";
import { convertDeltaToS2, convertS2ToDelta } from "./S2Conversions";

describe("Convert S2 to Delta", () => {
  test("Test empty S2 to empty Delta", () => {
    expect(convertS2ToDelta(s2Empty)).toMatchObject(deltaEmpty);
  });

  test("Convert S2 to Delta 1", () => {
    expect(convertS2ToDelta(s2Example1)).toMatchObject(deltaV2Example1);
  });

  test("Test whether sources map to types", () => {
    expect(convertS2ToDelta(s2Example3 as any)).toMatchObject(deltaExampleS2V2);
  });

  test("Convert S2 to Delta 2", () => {
    expect(convertS2ToDelta(s2Example4 as any)).toMatchObject(deltaExampleV24);
  });
});

describe("Convert Delta to S2", () => {
  test("Test empty Delta to empty S2", () => {
    expect(convertDeltaToS2(deltaEmpty as any, Personas.PHYSICIAN, EditorTypes.NOTE)).toMatchObject(s2EmptyObj);
  });

  test("Convert Delta to S2 1", () => {
    expect(convertDeltaToS2(deltaExample1 as any, Personas.PHYSICIAN, EditorTypes.NOTE)).toMatchObject(s2Example2);
  });

  test("Test whether types match to sources", () => {
    expect(convertDeltaToS2(deltaExample2 as any, Personas.PHYSICIAN, EditorTypes.NOTE)).toMatchObject(s2Example3);
  });

  test("Convert Delta to S2", () => {
    expect(convertDeltaToS2(deltaExample3 as any, Personas.PHYSICIAN, EditorTypes.NOTE)).toMatchObject(s2Example5);
  });

  test("Convert Delta to S2 5", () => {
    expect(convertDeltaToS2(deltaExample5 as any, Personas.PHYSICIAN, EditorTypes.NOTE)).toMatchObject(s2Example6);
  });
});
