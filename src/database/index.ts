import { DataSource } from "typeorm";
import { Note } from "../entities/Note";
import { User } from "../entities/User";


export const database = new DataSource({
  type: 'better-sqlite3',
  database: `./src/database/database.db`,
  synchronize: true,
  // logging: true,
  entities: [User, Note],
  subscribers: [],
  migrations: [],
});
