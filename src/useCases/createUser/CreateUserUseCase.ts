import { hash } from "bcryptjs";
import { database } from "../../database";
import { User } from "../../entities/User";

interface IUserRequest  {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {

    async execute({name, email, password}:IUserRequest) {

        const userRepository = database.getRepository(User);
        const userAlreadyExists = await userRepository.findOne({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("O usuário já existe");
        }

        const passwordHashed = await hash(password, 8)

        const newUser = userRepository.create({email, password: passwordHashed, name});
        userRepository.save(newUser);
        
        return newUser
    }

}


export {CreateUserUseCase}