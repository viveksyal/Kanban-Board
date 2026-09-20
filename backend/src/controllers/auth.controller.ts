import { loginUser, registerUser } from "../services/auth.service.js";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";

export async function registerController(req: Request, res: Response){
    const {email, password, name} = req.body;
    const newUser = await registerUser({email, password, name});
    return res.status(201).json({
        message: "User registered successfully",
        name: newUser.name,
        email: newUser.email
    })
}

export async function loginController(req: Request, res: Response){
    const {email, password} = req.body;
    const token = await loginUser({email, password});
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000*60*60*24*7 
    });
    return res.status(200).json({
        message: "User logged in successfully",
    })
}

