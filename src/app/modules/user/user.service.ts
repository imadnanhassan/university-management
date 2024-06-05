import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser) => {
  // auto Id,

  // password

  const createUser = await User.create(user);

  if (!createUser) {
    throw new Error("User not created");
  }

  return createUser;
};

export default {
  createUser,
};
