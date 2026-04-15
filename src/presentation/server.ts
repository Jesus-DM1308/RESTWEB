import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

interface Options {
    PORT: number;
    PUBLIC_PATH: string;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class Server {
private app = express();
private readonly port: number;
private readonly publicPath: string;

constructor( options: Options ){
    const { PORT, PUBLIC_PATH } = options;
    this.port = PORT;
    this.publicPath = PUBLIC_PATH;
}

    async start(){

        //* Middlewares

        //* Public Folders
        this.app.use( express.static( this.publicPath ))
        this.app.use((req, res) => {
            const indexPath = path.join(__dirname, `../../${ this.publicPath }/index.html`);
            res.sendFile(indexPath);
            
        });

       this.app.listen( this.port, () => {
            console.log('server running');
        });
        
    }
}