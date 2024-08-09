import express from 'express';
import signale from 'signale';
import CheeseRouter from './infrastructure/routes';
import morgan from 'morgan';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';

const port = process.env.PORT || 3001;
const app = express();

dotenv.config();

app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));

app.use(cors({
    origin: "https://zifra.cheassy.com.mx",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "PREFLIGHT"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/cheese', CheeseRouter);

const options = {
    key: fs.readFileSync(String(process.env.SSL_KEY)),
    cert: fs.readFileSync(String(process.env.SSL_CERT))
};

https.createServer(options, app).listen(port, () => {
    signale.success(`HTTPS Server running on port ${port}`);
});