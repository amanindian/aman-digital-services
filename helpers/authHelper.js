import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 5;
    const hasedPassword = await bcrypt.hash(password, saltRounds);
    return hasedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};
