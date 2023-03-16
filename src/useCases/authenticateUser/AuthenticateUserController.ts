import { Request, Response } from "express";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";


class AuthenticateUserController {

    async handle(req: Request, res: Response ) {
        try {
            const {email, password} = req.body;
            const authenticateUserUseCase = new AuthenticateUserUseCase();

            const token = await authenticateUserUseCase.exetuce({email, password});
            return res.status(200).json({token});

        } catch (error: any) {
            return res.status(400).json(error.message);
        }
    }
}

export default AuthenticateUserController;