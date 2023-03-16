import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { database } from "../../database";
import { User } from "../../entities/User";

interface IRequest {
    email: string;
    password: string;
}



class AuthenticateUserUseCase {
    
    async exetuce({email, password}: IRequest) {
        const userRepository = database.getRepository(User);
        const user = await userRepository.findOne({where: { email: email }})

        if(!user) {
            throw new Error("Usuário ou senha incorreta");
        }

        const passwordMatch = compare(password, user.password);
        if(!passwordMatch) {
            throw new Error("Usuário ou senha incorreta. Tente novamente");
        }

        const token = sign({}, "409e0f26-640f-44c0-9d20-35c85011e8cd", {
            subject: user.id.toString(),
            expiresIn: "20s",
        });

        return token;

    }
}

export default AuthenticateUserUseCase;