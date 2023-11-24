import Server from "./models/server";
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Server class
const server = new Server();
