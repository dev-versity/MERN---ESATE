import mongoose, {  Schema } from "mongoose";
import {IUser} from '../interfaces/user.interface'

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model<IUser>("User", userSchema)

export default User;