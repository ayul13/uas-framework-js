import express from "express";
import cors from "cors";
import MtkRoute from "./routes/MtkRoute.js";
// import KelasRoute from "./routes/KelasRoute.js"
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(MtkRoute);
// app.use(KelasRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));