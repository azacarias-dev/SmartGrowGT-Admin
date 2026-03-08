import Admin from "./admins.model.js";

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        return res.status(200).json({
            success: true,
            message: "Admins listados correctamente",
            admins
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al listar los admins",
            error: error.message
        });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const { adminId } = req.params;
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Admin encontrado",
            admin
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el admin",
            error: error.message
        });
    }
};

export const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const admin = await Admin.create({ name, email, password });
        return res.status(201).json({
            success: true,
            message: "Admin creado correctamente",
            admin
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al crear el admin",
            error: error.message
        });
    }
};

export const updateAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { name, email, password } = req.body;
        const admin = await Admin.findByIdAndUpdate(adminId, { name, email, password }, { new: true });
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Admin no encontrado"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Admin actualizado correctamente",
            admin
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar el admin",
            error: error.message
        });
    }
};

export const changeStatusAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const isActive = req.url.includes('/activar');
        const action = isActive ? 'activada' : 'desactivada';

        const admin = await Admin.findByIdAndUpdate(
            id,
            { isActive },
            { new: true }
        );

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: 'Admin no encontrado',
            });
        }

        res.status(200).json({
            success: true,
            message: `Admin ${action} exitosamente`,
            data: admin,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al cambiar el estado del admin',
            error: error.message,
        });
    }
};