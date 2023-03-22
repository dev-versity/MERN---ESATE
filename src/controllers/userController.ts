import { Request, Response } from "express"
import User from "../models/user"
import bcrypt from "bcryptjs"

const register = async (req: Request, res: Response) => {
    try {
        // TODO: Optimization for Typescript
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new User(req.body)
        const userSaved = await newUser.save()
        res.send(userSaved)

    } catch (error) {
        console.error(error)
    }
}

export {register}