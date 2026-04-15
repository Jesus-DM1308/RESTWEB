import { envs } from './config/envs.ts';
import { Server } from './presentation/server.ts';
(async() => {
    main();
})()

function main() {
    const server  = new Server({
        PORT: envs.PORT,
        PUBLIC_PATH: envs.PUBLIC_PATH
    });
    server.start();
}