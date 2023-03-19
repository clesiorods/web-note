import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController {


    async findAll(req: Request, res: Response): Promise<Response> {
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


    async create(req: Request, res: Response) {
        try {
            const {email, name, password} = req.body;
            const createUserUseCase = new UserService();
            const user = await createUserUseCase.create({email, name, password});
    
            return res.status(200).json(user);

        } catch (error: any) {
            return res.status(400).json(error.message)
        }
    }


    async findOne(req:Request, res:Response): Promise<Response> {
        try {
            const userService = new UserService();
            const {id} = req.params;
            if(!id) {
                throw new Error('Não foi possível realizar a busca. Dados incompletos');
            }
            const user = await userService.findOne(Number(id));
            return res.status(200).json(user);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async update(req: Request, res: Response): Promise<Response> {
        try {
            let user = req.body;
            const {id} = req.params;
            if (!id || (!user.email && !user.name && !user.password)) {
                throw new Error('Não foi possível criar o usuário. Dados incompletos');
            }
            user.id = id;
            const userService = new UserService();
            const result = await userService.update(user);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            if (!id) {
                throw new Error('Não foi possível deletar o usuário. Dados incompletos');
            }
            const userService = new UserService();
            const result = await userService.delete(Number(id));
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }

}

