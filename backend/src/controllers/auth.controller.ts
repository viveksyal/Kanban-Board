import { registerUser } from "../services/auth.service.js";
import type { Request, Response } from "express";


export async function registerController(req: Request, res: Response){
    const {email, password, name} = req.body;
    const newUser = await registerUser({email, password, name});
    return res.status(201).json({
        message: "User registered successfully",
        name: newUser.name,
        email: newUser.email
    })
}

