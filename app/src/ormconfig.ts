import {ListEntity} from "./shared/entities/ListEntity";
import {ConnectionOptions} from "typeorm";

const config: ConnectionOptions = {
   type: "mysql",
   host: "mysql",
   port: 3306,
   username: "mysql",
   password: "mysql",
   database: "front",
   synchronize: false,
   logging: false,
   entities: [
        ListEntity
   ]
}

export default config
