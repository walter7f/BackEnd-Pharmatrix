import express from "express";
import cors from "cors"
import userRouter from "../routes/user.router.js";
//import accountRouter from "../routes/account.router.js";
//import expensesRouter from "../routes/expenses.router.js";
import lotePlaniRouter from "../routes/lotePlanificacion.router.js";

import cookieParser from "cookie-parser";

const app =express();

app.use(cors());
app.use(cookieParser());
//usando los miderwers
app.use(express.json());

//parsear x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));

app.use("/api/pharmatrix", userRouter,lotePlaniRouter /*expensesRouter,*//*,accountRouter*/);

export default app;

//logers morgan
