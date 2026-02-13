import {getAllUsers} from '../services/user.services.js';
import { createUser } from '../services/user.services.js';  
import { updateAllofUsers } from '../services/user.services.js';
import { deleteAllofUsers } from '../services/user.services.js'; 

export async function listAllofUsers(req, res) {
   try {
      const users = await getAllUsers();
      res.json(users);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}

export async function addUser(req, res) {
   try {
      const { name, email } = req.body;
      const userId = await createUser(name, email);
      res.status(201).json({ id: userId, name, email });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}

export async function updateUser(req, res) {
   try {
      const { id } = req.params;
      const {name, email} = req.body;

      console.log(req.body);
      console.log(req.method);
      const changes = await updateAllofUsers(id, name, email);

      if (!changes) 
         return res.status(404).json({ message: 'User not found' });
       
      res.json({ message: 'User updated successfully' });

   }catch (error) { 
      res.status(500).json({ error: error.message });
   }
}

export async function deleteUser(req, res) {
   try{
      const{id} = req.params;
      const changes = await deleteAllofUsers(id);

      if (!changes) 
         return res.status(404).json({ message: 'User not found' });

      res.json({ message: 'User deleted successfully' });

   }catch (error) {
      res.status(500).json({ error: error.message });
   }
}