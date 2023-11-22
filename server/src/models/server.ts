import express, { Application, Request, Response } from 'express';
import routeDrug from '../routes/routeDrug';
import database from '../database/connectionDB';

class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '7878';
        this.listen();
        this.midlewares();
        this.routes();
        this.databaseConnect();
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

    async databaseConnect () {
        
        try {
            await database.authenticate();
            console.log("database connected")
        } catch (error) {
            console.log(error)
            console.log('Error connection to the database')
        }

    }

}

export default Server;