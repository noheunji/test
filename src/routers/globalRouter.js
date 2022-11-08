import express from "express";
import { trending, search } from "../controllers/exhibitionControllers";
import { join, login } from "../controllers/usersControllers";

const globalRouter = express.Router();


globalRouter.get("/", trending);    // 메인 추천 전시회 / home 페이지
globalRouter.get("/join", join);    // 회원가입 
globalRouter.get("/login", login);  // 로그인
globalRouter.get("/search", search);

export default globalRouter;