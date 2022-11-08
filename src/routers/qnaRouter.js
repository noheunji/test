import express from "express";
import { watch, edit, comment } from "../controllers/qnaControllers";

const qnaRouter = express.Router();




qnaRouter.get("/edit", edit);
qnaRouter.get("/comment", comment);
qnaRouter.get("/:id(\\d+)", watch);


export default qnaRouter;