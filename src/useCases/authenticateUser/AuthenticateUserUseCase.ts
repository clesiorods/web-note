import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { database } from "../../database";
import { User } from "../../entities/User";
import GenerateRefreshToken from "../../provider/GenereteRefrashToken";
import GenerateTokenProvider from "../../provider/GenereteTokenProvider";

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

        const generatedTokenProvider = new GenerateTokenProvider();
        const token = await generatedTokenProvider.execute(user.id);

        const generatedRefreshToken = new GenerateRefreshToken();
        const newRefreshToken = await generatedRefreshToken.execute(user.id);


        return {token, newRefreshToken};
    }
}

export default AuthenticateUserUseCase;