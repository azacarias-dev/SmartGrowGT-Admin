import { Router } from "express";
import { getDevices, getOnlineDevices, getOfflineDevices, getDeviceById, getDevicesByUser } from "./devices.controller.js";
import { validateDeviceId, validateUserId } from "../../middlewares/device-validation.js";

const router = Router();

router.get('/', getDevices);
router.get('/online', getOnlineDevices);
router.get('/offline', getOfflineDevices);
router.get('/:deviceId', validateDeviceId, getDeviceById);
router.get('/user/:userId', validateUserId, getDevicesByUser);

export default router;