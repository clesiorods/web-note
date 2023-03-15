import { Request, Response } from "express";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";


class CreateUserController {
    async handle(req: Request, res: Response) {

        try {
            const {email, name, password} = req.body;
            const createUserUseCase = new CreateUserUseCase();
    
            const user = await createUserUseCase.execute({email, name, password});
    
            return res.status(200).json(user);
            
        } catch (error: any) {
            return res.status(400).json(error.message)
        }
    }
}


export default CreateUserController