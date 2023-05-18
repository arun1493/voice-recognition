const isEmailValid = (email: string): boolean => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export { isEmailValid };
