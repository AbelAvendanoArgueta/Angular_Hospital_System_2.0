import express, { Application, Request, Response } from 'express';
import routeDrug from '../routes/routeDrug';

class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '7878';
        this.listen();
        this.midlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on por ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Hello World'
            })
        })
        this.app.use('/api/drugs', routeDrug)
    }

    midlewares () {
        this.app.use(express.json());
    }

}

export default Server;