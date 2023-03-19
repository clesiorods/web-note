import dayjs from "dayjs";
import { Request, Response } from "express";
import { database } from "../database";
import { RefreshToken } from "../entities/RefreshToken";
import { User } from "../entities/User";
import AuthenticationService from "../services/AuthenticationService";
// import AuthenticateUserUseCase from "../useCases/authenticateUser/AuthenticateUserUseCase";

export default class AuthenticationController {

    async authenticate(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const authenticationService = new AuthenticationService();
            const token = await authenticationService.authenticate({ email, password });
            return res.status(200).json(token);

        } catch (error: any) {
            return res.status(400).json(error.message);
        }
    }


    async useRefreshToken(req: Request, res: Response) {

        try {
            const { refresh_token } = req.body;
            const authenticationService = new AuthenticationService();
            const token = await authenticationService.newToken(refresh_token);
            
            const currentRefreshToken = await database.getRepository(RefreshToken).findOne({ where: { id: refresh_token } });
            let refreshToken = "";
            if (currentRefreshToken) {
                if(dayjs().unix() < currentRefreshToken.expiresIn) {
                    const newRefreshToken = await authenticationService.newRefreshToken(currentRefreshToken.id_user);
                    refreshToken = newRefreshToken ? newRefreshToken.id : ""
                } else {
                    throw new Error("expired refresh token");
                }
            }
            return res.json({ token, refreshToken })
            
        } catch (error:any) {
            return res.status(500).json(
                error.message
            )
        }

    }
}