import Joi from "joi";

export const validate = <T>(schema: Joi.Schema) =>
    (obj: unknown): T => {
        const { value, error } = schema.validate(obj,{allowUnknown :true})
        if (error) {
            throw error
        }
        return value
    }