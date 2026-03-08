'use strict'
import { isValidObjectId } from 'mongoose'; 

export const validateAdminAction = (req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            if (!isValidObjectId(id)) { 
                return res.status(400).json({
                    success: false,
                    message: 'El formato del ID de usuario no es válido'
                });
            }
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error en la validación de la acción',
            error: error.message 
        });
    }
}