import { openDB } from "../configDB";
import { IUser } from "../interfaces";


export class UserService {
    async createTable() {
        openDB()
            .then(db => {
                db.exec(
                    `CREATE TABLE IF NOT EXISTS User ( 
                    id INTEGER PRIMARY KEY, 
                    nome TEXT,
                    email TEXT,
                    senha TEXT
                    )`)
            })
    }


    async insertUser(user: IUser) {
        console.log(user)

        if(!user.email || !user.nome || !user.senha) {
            throw new Error("Não foi possível realizar o insert de usuário. Dados incompletos");
        }

        const insert = openDB()
            .then(db => {
                db.run(
                    `INSERT INTO User (nome, email, senha) VALUES (?, ?, ?)
                `), [user.nome, user.email, user.senha];
            })

        return insert
    }
}