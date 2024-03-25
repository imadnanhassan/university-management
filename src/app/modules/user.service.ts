import config from '../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserID } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //   default password
  const id = await generateUserID()
  user.id = id

  if (!user.password) {
    user.password = config.deafult_student_password as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
