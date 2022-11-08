import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import usersRouter from "./routers/usersRouter";
import exhibitionRouter from "./routers/exhibitionRouter";
import qnaRouter from "./routers/qnaRouter";

const PORT = 4000;


const app = express();
  
const logger = morgan("dev");

app.set("view engine" , "pug");
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/exhibition",  exhibitionRouter);
app.use("/users", usersRouter);
app.use("/qna", qnaRouter);
// app.use("/admin", adminRouter);

// respond with "hello world" when a GET request is made to the homepage
app.get('/hahaha', function(req, res) {
    res.send('hello world 난 못해우ㅜㅜㅜ 너무 어렵자너ㅜㅜ db어케함 ㅜㅜ');
  });

/* const handleLogin = (req, res) => {
    return res.send("Login here.");
  };
  const handleSignup = (req, res) =>{
      return res.send("Signup!! 회원가입 페이지 입니다!!!");
  }
  const handleMypage = (req, res) =>{
      return res.send("마이페이지 입니다!!!");
  }
  const handlehibition = (req, res) =>{
      return res.send("전시회 페이지 입니다!!!");
  }

app.get("/login", handleLogin);
app.get("/Signup", handleSignup);
app.get("/mypage", handleMypage);
app.get("/ehibition", handlehibition);
*/

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);