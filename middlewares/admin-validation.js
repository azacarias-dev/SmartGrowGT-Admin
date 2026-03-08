import { body, param } from 'express-validator';

export const validateAdminId = [
    param('adminId')
        .notEmpty().withMessage('El ID del admin es requerido')
        .isString().withMessage('El ID del admin debe ser una cadena de texto')
        .isLength({ min: 24 }).withMessage('El ID del admin debe tener al menos 24 caracteres')
];

export const validateAdminCreation = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido')
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('email')
        .notEmpty().withMessage('El correo electrónico es requerido')
        .isEmail().withMessage('El correo electrónico debe ser válido'),
    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];

export const validateAdminUpdate = [
    param('adminId')
        .notEmpty().withMessage('El ID del admin es requerido')
        .isString().withMessage('El ID del admin debe ser una cadena de texto')
        .isLength({ min: 24 }).withMessage('El ID del admin debe tener al menos 24 caracteres'),
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('email')
        .optional()
        .isEmail().withMessage('El correo electrónico debe ser válido'),
    body('password')
        .optional()
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];