'use strict';

import Device from "./devices.model.js";

/**
 * List all devices
 */
export const getDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        return res.status(200).json({
            success: true,
            message: "Dispositivos listados correctamente",
            devices
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al listar los dispositivos",
            error: error.message
        });
    }
};

/**
 * List all online devices
 */
export const getOnlineDevices = async (req, res) => {
    try {
        const devices = await Device.find({ status: 'online' });
        return res.status(200).json({
            success: true,
            count: devices.length,
            message: "Dispositivos online listados correctamente",
            devices
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al listar los dispositivos online",
            error: error.message
        });
    }
};

/**
 * List all offline devices
 */
export const getOfflineDevices = async (req, res) => {
    try {
        const devices = await Device.find({ status: 'offline' });
        return res.status(200).json({
            success: true,
            count: devices.length,
            message: "Dispositivos offline listados correctamente",
            devices
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al listar los dispositivos offline",
            error: error.message
        });
    }
};

/**
 * Get device by custom Raspberry Pi ID (deviceId)
 */
export const getDeviceById = async (req, res) => {
    try {
        const { deviceId } = req.params;
        const device = await Device.findOne({ deviceId });

        if (!device) {
            return res.status(404).json({
                success: false,
                message: "Dispositivo no encontrado con el ID proporcionado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Dispositivo encontrado",
            device
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al buscar el dispositivo",
            error: error.message
        });
    }
};

export const getDevicesByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const devices = await Device.find({ userId });

        if (!devices) {
            return res.status(404).json({
                success: false,
                message: "Dispositivos no encontrados"
            });
        }

        return res.status(200).json({
            success: true,
            devices
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los dispositivos",
            error: error.message
        });
    }
};
