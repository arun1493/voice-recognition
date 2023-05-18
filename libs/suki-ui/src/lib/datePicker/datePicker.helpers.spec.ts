import { Month } from "./datePicker.d";
import {
  getDateFromDateString,
  getDateStringFromTimestamp,
  getDayDetails,
  getMonthStr,
  getNumberOfDays,
  isCurrentDay,
  isSelectedDay
} from "./datePicker.helpers";

describe("datePicker.helpers tests", () => {
  describe("#getDayDetails", () => {
    const retVal = getDayDetails(1, 28, 2, 2022, 1);
    it("should return correct timestamp", () => {
      expect(retVal.timestamp).toEqual(1643616000000);
    });
  });

  describe("#getNumberOfDays", () => {
    it("should work in a non leap year", () => {
      const year = 2022;
      expect(getNumberOfDays(year, Month.Feb)).toEqual(28);
    });

    it("should work in a leap year", () => {
      const leapYear = 2024;
      expect(getNumberOfDays(leapYear, Month.Feb)).toEqual(29);
    });
  });

  // There is not much to test here that hasn't been tested in "getNumberOfDays" and "getDayDetails"
  // describe("#getMonthDetails", () => {});

  describe("#isCurrentDay", () => {
    it("should be true when current day", () => {
      const ts = new Date().setHours(0, 0, 0, 0);
      expect(isCurrentDay({ date: 0, day: 0, month: 0, timestamp: ts })).toBeTruthy();
    });

    it("should be false when not current day", () => {
      const ts = Date.now() + 24 * 60 * 60 * 1000;
      expect(isCurrentDay({ date: 0, day: 0, month: 0, timestamp: ts })).toBeFalsy();
    });
  });

  describe("#isSelectedDay", () => {
    it("should be true when selected is today", () => {
      expect(isSelectedDay({ date: 0, day: 0, month: 0, timestamp: 1 }, 1)).toBeTruthy();
    });

    it("should be false when selected is not today ", () => {
      expect(isSelectedDay({ date: 0, day: 0, month: 0, timestamp: 1 }, 2)).toBeFalsy();
    });
  });

  describe("#getDateFromDateString", () => {
    const stringDate = "2022-01-07"; // Jan 7th, 2022 should be {year: 2022, month: 0, date: 7}
    const value = getDateFromDateString(stringDate);
    it("should have correct year", () => {
      expect(value.year).toEqual(2022);
    });

    it("should have correct month", () => {
      expect(value.month).toEqual(1);
    });

    it("should have correct date", () => {
      expect(value.date).toEqual(7);
    });
  });

  describe("#getMonthStr", () => {
    it("should get the correct month", () => {
      expect(getMonthStr(5)).toEqual("June");
    });

    it("should get 'January' if arg is < 0", () => {
      expect(getMonthStr(-1)).toEqual("January");
    });

    it("should get 'December' if arg > 11", () => {
      expect(getMonthStr(12)).toEqual("December");
    });
  });

  describe("#getDateStringFromTimestamp", () => {
    it("should get correct date", () => {
      const timestamp = 1636503631345;
      expect(getDateStringFromTimestamp(timestamp)).toEqual("2021-11-09");
    });
  });
});
