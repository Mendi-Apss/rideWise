import { createConfig } from "./config";
import { System } from "./service/system";

const config = createConfig()

System(
    config.serverConfig
)
    .then(async ({ start }) => {
        await start()
        console.log('System is running')
    })