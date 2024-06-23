import { Server, ServerConfig } from "./server"

export const System = async (
    serverConfig : ServerConfig
) => {

    const server = await Server(serverConfig)

    return ({
        start: async () => {
            await server.start()
        },

        stop: async () => {
            await server.stop()
        }
    })
}

export interface SystemConfig {
    serverConfig: ServerConfig
}