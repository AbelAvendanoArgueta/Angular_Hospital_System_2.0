import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeDrug from '../routes/routeDrug';
import routeDoctor from '../routes/routeDoctor';
import database from '../database/connectionDB';

class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        // Initialize Express app
        this.app = express();
        // Set the port from the environment variable or default to '7878'
        this.port = process.env.PORT || '7878';
        // Start listening and set up middleware and routes
        this.listen();
        this.midlewares();
        this.routes();
        // Connect to the database
        this.databaseConnect();
    }

    // Start the server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }

    // Define routes
    routes() {
        // Define a basic route for the root endpoint
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Hello World'
            });
        });
        // Use the 'routeDrug' router for the '/api/mainmenu/drugs' endpoint
        this.app.use('/api/mainmenu/drugs', routeDrug);

        this.app.use('/api/mainmenu/doctors', routeDoctor);
    }

    // Set up middlewares
    midlewares () {
        // Parse the request body as JSON
        this.app.use(express.json());
        // Enable CORS
        this.app.use(cors());
    }

    // Connect to the database
    async databaseConnect () {
        try {
            await database.authenticate();
            console.log("Database connected");
        } catch (error) {
            console.log(error);
            console.log('Error connecting to the database');
        }
    }
}

export default Server;
