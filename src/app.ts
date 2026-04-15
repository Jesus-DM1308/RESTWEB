import { envs } from './config/envs.ts';
import { Server } from './presentation/server.ts';
(async() => {
    main();
})()

function main() {
    const server  = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
    server.start();
}