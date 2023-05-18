import { UserDetails } from "../types";

const getDoctorFullName = (details: UserDetails) => {
  const { person, userType } = details || {};
  const { middleName, firstName, lastName } = person || {};
  let name: string;

  if (middleName?.length) {
    name = `${firstName} ${middleName[0]}. ${lastName}`;
  } else {
    name = `${firstName} ${lastName}`;
  }

  if (userType) {
    name += `, ${userType}`;
  }

  return name;
};

export { getDoctorFullName };
