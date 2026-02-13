import {connection} from '../database/database.js';

//GET
export async function findAllUsers() {
   const db = await connection();
   return db.all('SELECT * FROM usersTest');
}
//POST
export async function insertUser(name, email) {
   const db = await connection();
   const result = await db.run('INSERT INTO usersTest (name, email) VALUES (?, ?)', [name, email]);
   return result.lastID;
}
//PUT
export async function updateUser(id, name, email){
   const db = await connection();
   const result = await db.run('UPDATE usersTest SET name = ?, email = ? WHERE id =?', [name, email, id]);
   return result.changes;
}
//DELETE
export async function deleteUser(id){
   const db = await connection();
   const result = await db.run('DELETE FROM usersTest WHERE id = ?', [id]);
   return result.changes;
}


