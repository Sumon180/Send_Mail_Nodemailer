import express from "express";
import {signup,getbill} from "../controller/appController.js";

const appRouter = express.Router();

/** HTTP Reqeust */
appRouter.post("/user/signup", signup);
appRouter.post('/product/getbill', getbill);

export default appRouter;
