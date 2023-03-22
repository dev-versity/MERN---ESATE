import { Request, Response } from "express"
import User from "../models/user"
const register = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body)
        const userSaved = await newUser.save()
        res.send(userSaved)
    } catch (error) {
        console.error(error)
    }
}

export {register}