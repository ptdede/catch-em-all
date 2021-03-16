import Dexie from "dexie";
import { dbConfig } from "./config";

const database = new Dexie(dbConfig.name);

database.version(dbConfig.version).stores({
  [dbConfig.tables.myPokemons]: "++id, name, &ownedName, [name+ownedName]",
});

export default database;
