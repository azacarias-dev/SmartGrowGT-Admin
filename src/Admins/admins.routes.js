import Router from "express";
import { getAdmins, getAdminById, createAdmin, updateAdmin, changeStatusAdmin } from "./admins.controller.js";
import { validateAdminId, validateAdminCreation, validateAdminUpdate } from "../../middlewares/admin-validation.js";

const router = Router();

router.get('/', getAdmins);
router.get('/:adminId', validateAdminId, getAdminById);
router.post('/', validateAdminCreation, createAdmin);
router.put('/:adminId', validateAdminUpdate, updateAdmin);
router.put('/:id/activar', validateAdminId, changeStatusAdmin);
router.put('/:id/desactivar', validateAdminId, changeStatusAdmin);

export default router;