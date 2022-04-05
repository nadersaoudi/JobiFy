import express from "express";

import dotenv from 'dotenv';
import connectDB from "./db/connect.js";

//Middlewares
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import notFoundMiddleware from "./middlewares/not-found.js";
dotenv.config()

const app = express();



app.get('/', (req, res) => {
    res.send('Welcome!')
});

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