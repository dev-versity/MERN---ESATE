import mongoose, {  Schema } from "mongoose";
import {IUser} from '../interfaces/user.interface'

const userSchema = new Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model("User", userSchema)

export default User;