import { getDoctorFullName } from "./user";

const person1 = {
  firstName: "First",
  middleName: "Middle",
  lastName: "Last"
};

const user1 = {
  id: "id",
  organizationId: "orgId",
  person: person1,
  userType: "userType"
};

const person2 = {
  firstName: "First",
  middleName: "",
  lastName: "Last"
};

const user2 = { ...user1 };
user2.person = person2;

const user3 = { ...user1, userType: "" };

const user4 = { ...user3, person: person2 };

describe("User helper - getDoctorFullName", () => {
  it("should return correct result", () => {
    expect(getDoctorFullName(user1)).toBe("First M. Last, userType");
    expect(getDoctorFullName(user2)).toBe("First Last, userType");
    expect(getDoctorFullName(user3)).toBe("First M. Last");
    expect(getDoctorFullName(user4)).toBe("First Last");
  });
});
