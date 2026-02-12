import {getAllUsers} from '../services/user.services.js';

export async function listAllofUsers(req, res) {
   try {
      const users = await getAllUsers();
      res.json(users);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}