import { body, param } from "express-validator";
import { checkValidators } from "./check-validators.js";

// Validar creación de cultivo
export const validateCreateCrop = [
    body("name").notEmpty().withMessage("El nombre es obligatorio"),
    body("description").notEmpty().withMessage("La descripción es obligatoria"),
    body("maximiumTemperature").isNumeric().withMessage("Temperatura máxima debe ser numérica"),
    body("minimumTemperature").isNumeric().withMessage("Temperatura mínima debe ser numérica"),
    body("maximumHumidity").isNumeric().withMessage("Humedad máxima debe ser numérica"),
    body("minimumHumidity").isNumeric().withMessage("Humedad mínima debe ser numérica"),
    body("maximumLight").isNumeric().withMessage("Luz máxima debe ser numérica"),
    body("minimumLight").isNumeric().withMessage("Luz mínima debe ser numérica"),
    body("irrigationPeriod").isNumeric().withMessage("Período de riego debe ser numérico"),
    body("growthDays").isNumeric().withMessage("Días de crecimiento debe ser numérico"),
    body("sunlightRequirement")
        .isIn(["Bajo", "Medio", "Alto"])
        .withMessage("Requerimiento de luz debe ser Bajo, Medio o Alto"),
    checkValidators,
];

// Validar edición de cultivo
export const validateUpdateCrop = [
    param("id").notEmpty().withMessage("El ID del cultivo es obligatorio"),
    body("name").optional().isString(),
    body("description").optional().isString(),
    body("maximiumTemperature").optional().isNumeric(),
    body("minimumTemperature").optional().isNumeric(),
    body("maximumHumidity").optional().isNumeric(),
    body("minimumHumidity").optional().isNumeric(),
    body("maximumLight").optional().isNumeric(),
    body("minimumLight").optional().isNumeric(),
    body("irrigationPeriod").optional().isNumeric(),
    body("growthDays").optional().isNumeric(),
    body("sunlightRequirement").optional().isIn(["Bajo", "Medio", "Alto"]),
    checkValidators,
];

// Validar obtener cultivo por ID
export const validateGetCropById = [
    param("id").notEmpty().withMessage("El ID del cultivo es obligatorio"),
    checkValidators,
];

// Validar obtener cultivo por nombre
export const validateGetCropByName = [
    param("nombreCultivo")
        .notEmpty()
        .withMessage("El nombre del cultivo es obligatorio")
        .isString()
        .withMessage("El nombre debe ser una cadena de texto"),
    checkValidators,
];