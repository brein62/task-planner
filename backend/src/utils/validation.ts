export const isPasswordValid = (password: string) => {
  const re =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,}$/;
  return re.test(password);
};
