import { Router } from 'express';
import { 
    getUsers, 
    getUserById, 
    activateUser, 
    deactivateUser 
} from './users.controller.js';

import { validateAdminAction } from '../../middlewares/usuarios-validator.js';

const router = Router();

// Listar todos (Admin)
router.get('/', getUsers);

// Buscar por ID
router.get('/:id', validateAdminAction ,getUserById);

// Estados del usuario
router.put('/activate/:id', validateAdminAction, activateUser);
router.put('/deactivate/:id', validateAdminAction, deactivateUser);

export default router;