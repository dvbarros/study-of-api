import { Router } from "express";
import { listAllofUsers } from '../controllers/user.controller.js';

const router = Router();

router.get('/', listAllofUsers);

router.put('/', (req, res) =>{
    res.json({ message: 'Chamei a rota no arquivo routes - Método PUT' });
} );

export default router;