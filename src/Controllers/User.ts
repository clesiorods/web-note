import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {


    async findAll(req: Request, res:Response): Promise<Response> {
        try {
            const userService = new UserService();
            const result = await userService.findAll();

            return res.status(200).json(result);
            
        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    // async addUser(req: Request, res:Response): Promise<Response> {
    //     try {
    //         const {nome, email, senha} = req.body;

    //         const userService = new UserService();
    //         const result = await userService.insertUser({nome, email, senha});

    //         return res.status(200).json(result);
            
    //     } catch (error: any) {
    //         return res.status(400).json({
    //             err: error.message
    //         })
    //     }
    // } 
    
}

