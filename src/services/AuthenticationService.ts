import { compare } from "bcryptjs";
import dayjs from "dayjs";
import { sign } from "jsonwebtoken";
import { database } from "../database";
import { RefreshToken } from "../entities/RefreshToken";
import { User } from "../entities/User";


interface IRequest {
    email: string;
    password: string;
}


export default class AuthenticationService {

    async authenticate({ email, password }: IRequest) {
        const userRepository = database.getRepository(User);
        const user = await userRepository.findOne({ where: { email: email } })
        if (!user) {
            throw new Error("Usuário ou senha incorreta");
        }
        const passwordMatch = compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Usuário ou senha incorreta. Tente novamente");
        }
        // const generatedTokenProvider = new GenerateTokenProvider();
        const token = await this.newToken(Number(user.id));
        // const generatedRefreshToken = new GenerateRefreshToken();
        const newRefreshToken = await this.newRefreshToken(user.id);

        return { token, refreshToken: newRefreshToken.id };
    }


    async newToken(id_user: number) {
        const token = sign({}, "409e0f26-640f-44c0-9d20-35c85011e8cd", {
            subject: id_user.toString(),
            expiresIn: "20s",
        });
        return token;
    }


    async newRefreshToken(id_user: number) {
        const expiresIn = dayjs().add(7, "days").unix();
        const refreshTokenRepository = database.getRepository(RefreshToken);

        await refreshTokenRepository
            .createQueryBuilder()
            .delete()
            .where(`id_user = ${id_user}`)
            .execute()

        let newRefreshToken = refreshTokenRepository.create({
            id_user: id_user,
            expiresIn: expiresIn
        })
        await refreshTokenRepository.save(newRefreshToken)
        return newRefreshToken;
    }
}

