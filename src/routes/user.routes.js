import { Router } from "express";
import { listAllofUsers } from '../controllers/user.controller.js';
import { addUser } from '../controllers/user.controller.js'; 
import { updateUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';   
import { getAllUsers } from "../services/user.services.js";

const router = Router();

router.get('/createUser', (req,res)=>{
    res.render('createUser');
})

router.get('/edit/:id', async (req,res)=>{
    const{id} = req.params;
    const users = await getAllUsers();
    const user = users.find(u => u.id === parseInt(id));
    if (!user)       
        return res.status(404).json({ message: 'User not found' });

    res.render('updateUser', {user});
});

router.get('/', listAllofUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;