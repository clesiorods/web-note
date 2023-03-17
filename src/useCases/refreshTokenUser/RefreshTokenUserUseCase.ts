import { database } from "../../database";
import { RefreshToken } from "../../entities/RefreshToken";
import GenerateTokenProvider from "../../provider/GenereteTokenProvider";


export default class RefreshTokenUserUseCase {
    async execute(refresh_token_id: number) {
        const refreshTokenrepository = database.getRepository(RefreshToken);

        const refreshToken = await refreshTokenrepository.findOne({
            where: {
                id: refresh_token_id
            }
        })

        if(!refreshToken) {
            throw new Error("Invalid refreshToken");
        }

        const generatedTokenProvider = new GenerateTokenProvider();
        const token = await generatedTokenProvider.execute(refreshToken.id_user);

        return token;
    }
}