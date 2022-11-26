import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors);

/*await mongoose
    .connect(
        "mongodb+srv://mangal:Mangal123@bitfumes.mqn7n4q.mongodb.net/?retryWrites=true&w=majority"
    );
console.log("MongoDB connection is successful");*/

mongoose
    .connect(
        "mongodb+srv://mangal:Mangal123@bitfumes.mqn7n4q.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log('MongoDB connection is successful'))
    .catch((err) => console.error(err));

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.listen(port, () => {
    console.log("Server is running at http://localhost:4000");
});
