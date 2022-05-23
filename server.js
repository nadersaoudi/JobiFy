import express from "express";
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from "morgan";

//db and authenticateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from './Routes/authRouter.js';
import jobsRouter from './Routes/jobsRouter.js';

//middlewares
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import notFoundMiddleware from "./middlewares/not-found.js";

dotenv.config()


const app = express();

if(process.env.NODE_ENV != 'production'){
    app.use(morgan('dev'))
}
app.use(express.json());


app.get('/', (req, res) => {
    res.json({msg:'Welcome!'})
});
app.get('/api/v1', (req, res) => {
    res.json({msg:'Welcome!'})
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port} ...`)
        });

    } catch (error) {
        console.log(error)
    }
}

start()