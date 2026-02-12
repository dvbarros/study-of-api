import {connection} from '../database/database.js';

export async function findAllUsers() {
   const db = await connection();
   return db.all('SELECT * FROM usersTest');
}


