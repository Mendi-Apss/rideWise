import bodyParser from 'body-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';

export const Server = async (serverConfig: ServerConfig) => {
    const { PORT } = serverConfig
    const app = express()

    const runServer = async () => app.listen(PORT, () =>
        console.log(`listen to port ${PORT}`))

    const registerParserHandler = () => {
        app.use(cors())
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: false }))
    }

    const registerRouterHandler = () => {
    }

    const registerErrorHandler = () => {
        app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

        })
    }

    return ({
        start: async () => {
            registerParserHandler()
            registerRouterHandler()
            registerErrorHandler()
            await runServer()
        },

        stop: async () => {
            (await runServer()).close()
        }
    })
}



export interface ServerConfig {
    PORT: number
}