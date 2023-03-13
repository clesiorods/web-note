import { openDB } from "../configDB";
import { database } from "../database";
import { User } from "../entities/User";
import { IUser } from "../interfaces";


export class UserService {

    async findAll() {
        
        const userRepository = database.getRepository(User);

        const users = await userRepository.find({
            select: {
                nome: true
            }
        });
        console.log(users);

        return users;
    }
}