import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, "409e0f26-640f-44c0-9d20-35c85011e8cd");
        return next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}