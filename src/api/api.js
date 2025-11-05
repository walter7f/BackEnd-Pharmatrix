import express from "express";
import cors from "cors"
import userRouter from "../routes/user.router.js";
//import accountRouter from "../routes/account.router.js";
import desviacionRouter from "../routes/desviacion.router.js";
import lotePlaniRouter from "../routes/lotePlanificacion.router.js";
import areaFrabircRouter from "../routes/areaFabricacion.route.js"

import cookieParser from "cookie-parser";

const app =express();

app.use(cors());
app.use(cookieParser());
//usando los miderwers
app.use(express.json());

//parsear x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));

app.use("/api/pharmatrix", userRouter,lotePlaniRouter,areaFrabircRouter,desviacionRouter);

export default app;

//logers morgan
