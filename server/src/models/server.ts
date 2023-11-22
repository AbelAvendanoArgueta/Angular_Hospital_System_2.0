import express, { Application } from 'express';


class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        this.app = express();
        this.port = "7777"
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on por ${this.port}`)
        })
    }
}

export default Server;