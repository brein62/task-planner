import cors from "cors";
import cookieParser from "cookie-parser";
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { PORT } from './config';
import connectMongoDB from "./connectDB";

//For env File 
dotenv.config();

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // allow for sending JWT cookies
};

// Middleware Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());


app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
  connectMongoDB();
});