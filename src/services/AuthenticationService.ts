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
        const token = await this.newToken(Number(user.id));
        const newRefreshToken = await this.newRefreshToken(user.id);

        return { token, refreshToken: newRefreshToken.id };
    }


    async newToken(id_user: number) {
        const token = sign({}, `${process.env.PRIVATE_KEY}`, {
            subject: id_user.toString(),
            expiresIn: "2h",
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


    async useRefreshToken(id_refreshToken: string) {
        const refreshTokenRepository = database.getRepository(RefreshToken);
        const currentRefreshToken = await refreshTokenRepository.findOne({where: {id: id_refreshToken}})
        
        if((currentRefreshToken) && (currentRefreshToken.expiresIn > dayjs().unix())) {
            const newToken = await this.newToken(currentRefreshToken.id_user);
            const newRefreshToken = await this.newRefreshToken(currentRefreshToken.id_user);
            return ({token: newToken, refreshToken: newRefreshToken.id});
        } else {
            throw new Error("Invalid refresh token");
        }

    }
}

