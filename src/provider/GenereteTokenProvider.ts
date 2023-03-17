import { sign } from "jsonwebtoken";


class GenerateTokenProvider {
    async execute(id_user: number) {
        const token = sign({}, "409e0f26-640f-44c0-9d20-35c85011e8cd", {
            subject: id_user.toString(),
            expiresIn: "20s",
        });

        return token;
    }
}

export default GenerateTokenProvider