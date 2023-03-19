import { database } from "../database";
import { User } from "../entities/User";


interface IUser {
    email: string;
    name: string;
    password: string;
}
export class UserService {


    async findAll() {
        const userRepository = database.getRepository(User);
        const users = await userRepository.find();
        return users;
    }


    async findOne(id: number) {
        const userRepository = database.getRepository(User);
        const user = await userRepository.findOne(
            {
                where: {
                    id: id
                }
            })
        return user
    }


    async create(user: IUser) {
        if (!user.email || !user.name || !user.password) {
            throw new Error('Não foi possível criar um usuário');
        }
        const userRepository = database.getRepository(User);
        let newUser = userRepository.create(user);
        newUser = await userRepository.save(newUser);
        return newUser;
    }


    async update(user_data: User) {
        if (!user_data.id) {
            throw new Error('Não foi possível criar um usuário');
        }
        const userRepository = database.getRepository(User);
        let user = await userRepository.findOne({ where: { id: user_data.id } });
        if (user) {
            user.name = user_data.name ? user_data.name : user.name;
            user.email = user_data.email ? user_data.email : user.email;
            user.password = user_data.password ? user_data.password : user.password;
            user = await userRepository.save(user);
        } else {
            throw new Error('Não foi possível localizar o usuário');
        }
        return user;
    }


    async delete(id: number) {
        const userRepository = database.getRepository(User);
        const user = userRepository.update({id: id}, {deleted_at: new Date});
        return user;
    }
}