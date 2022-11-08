import express from "express";
import { 
    watch,  
    country, 
    deleteExhibition,  
    getEdit,
    postEdit,
    getUpload,
    postUpload
} from "../controllers/exhibitionControllers";


const exhibitionRouter = express.Router();



// exhibitionRouter.get("/post", post);  // 전시회 보기 
exhibitionRouter.route("/post/:id(\\d+)").get(watch); // 전시회 보기
exhibitionRouter.route("/post/:id(\\d+)/edit").get(getEdit).post(postEdit); // 전시회 수정
exhibitionRouter.route("/upload").get(getUpload).post(postUpload);






exhibitionRouter.get("/post/:id(\\d+)/delete", deleteExhibition);
exhibitionRouter.get("/country", country);  // 전시회 지역별 -> 이거 어디로 둬야 될지 모르겠네



export default exhibitionRouter;