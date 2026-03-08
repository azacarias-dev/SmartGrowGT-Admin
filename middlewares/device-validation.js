import { param } from "express-validator";

export const validateDeviceId = [
    param('deviceId')
        .notEmpty().withMessage('El ID del dispositivo es requerido')
        .isString().withMessage('El ID del dispositivo debe ser una cadena de texto')
        .isLength({ min: 6 }).withMessage('El ID del dispositivo debe tener al menos 6 caracteres')
];

export const validateUserId = [
    param('userId')
        .notEmpty().withMessage('El ID del usuario es requerido')
        .isString().withMessage('El ID del usuario debe ser una cadena de texto')
        .isLength({ min: 24 }).withMessage('El ID del usuario debe tener al menos 24 caracteres')
];

