import dayjs from "dayjs";
import { database } from "../database";
import { RefreshToken } from "../entities/RefreshToken";


class GenerateRefreshToken {

    async execute(id_user: number) {
        const expiresIn = dayjs().add(15, "seconds").unix();
        const refreshTokenRepository = database.getRepository(RefreshToken);

        let newRefreshToken = refreshTokenRepository.create({
            id_user: id_user,
            expiresIn: expiresIn
        })
        
        await refreshTokenRepository.save(newRefreshToken)

        return newRefreshToken;
    }
}

export default GenerateRefreshToken;