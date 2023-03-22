import { Request, Response, Router } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import Controller from "../utils/interfaces/controller.interface";

 class UserController implements Controller {
  path = "/users";
  router = Router();
  constructor() {
    this.initializeRoute();
  }
  initializeRoute() {
    this.router.post(`${this.path}/register`, this.register);
    // this.router.post(`${this.path}/login`, this.login);

  }

  register = async (req: Request, res: Response) => {
    try {
      // TODO: Optimization for Typescript
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      const newUser = new User(req.body);
      const userSaved = await newUser.save();
      res.send(userSaved);
    } catch (error) {
      console.error(error);
    }
  };
}
export default UserController
