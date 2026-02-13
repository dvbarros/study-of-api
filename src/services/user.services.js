import {findAllUsers} from '../repository/user.repository.js';
import { insertUser } from '../repository/user.repository.js';
import { updateUser } from '../repository/user.repository.js';
import { deleteUser } from '../repository/user.repository.js';

export async function getAllUsers() {
   return findAllUsers();
}

export async function createUser(name, email) {
   return insertUser(name, email);
}

export async function updateAllofUsers(id, name, email){
   return updateUser(id, name, email);
}

export async function deleteAllofUsers(id){
   return deleteUser(id);
}
