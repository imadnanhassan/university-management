import config from "../../../config";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { generateUserId } from "./user.utils";

const createUser = async (user: IUser) => {
  // auto Id,
  const id = generateUserId();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  const createUser = await User.create(user);

  if (!createUser) {
    throw new Error("User not created");
  }

  return createUser;
};

export default {
  createUser,
};
