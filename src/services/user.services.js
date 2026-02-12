import {findAllUsers} from '../repository/user.repository.js';

export async function getAllUsers() {
   return findAllUsers();
}

export default getAllUsers;