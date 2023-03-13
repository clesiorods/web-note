import path from "path";
import { DataSource } from "typeorm";
import { User } from "../entities/User";


export const database = new DataSource({
  type: 'better-sqlite3',
  database: `./src/database/database.db`,
  synchronize: true,
  logging: true,
  // entities: [`${path.resolve(__dirname,'..','entities','*.{ts,js}')}`],
  entities: [User],
  subscribers: [],
  migrations: [],
});
