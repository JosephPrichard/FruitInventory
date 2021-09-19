import express from "express";
import { fruitRouter } from "./routes/fruits";
import mongoose from "mongoose";

const app = express();
const port = 5000;

app.use(express.json())

//admin
//B4mGjz8eQagVk9LT
const CONNECTION_STRING = "mongodb+srv://admin:B4mGjz8eQagVk9LT@cluster0.t4eew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected to db"));

app.use("/fruits", fruitRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));


