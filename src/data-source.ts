import "reflect-metadata"
import { DataSource } from "typeorm"
import { DocumentMetadata } from "../src/entities/documentMetadata"
import {Document} from "./entities/documento"

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "p",
  database: "provaDB",
  entities: [Document,DocumentMetadata],
  synchronize: false,
  logging: false,
  dropSchema: false,
  
})