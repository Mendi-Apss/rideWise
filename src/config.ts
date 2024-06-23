// create config schema using joi and validate config

import Joi from "joi";
import { SystemConfig } from "./service/system";
import { validate } from "./utils/types.utils";

interface environmentConfig {
    PORT : number
}

const systemConfigSchema = Joi.object({
    PORT: Joi.number().default(8080).required()
})

const validateSystemConfig = validate<environmentConfig>(systemConfigSchema)

export const createConfig = (): SystemConfig => {

    //validate env
    const config = validateSystemConfig(process.env)

    return ({
        serverConfig: {
            PORT: config.PORT
        }
    })
}


