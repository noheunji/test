let exhibitions = [
    {
        title : "First post",
        place : 2,
        interest : 3,
        view : "No",
        date : "2022.02.23~2022.06.25",
        id:1
    },
    {
        title : "Second post",
        place : 5,
        interest : 2,
        view : "Yes",
        date : "2022.02.23~2022.12.25",
        id:2
    },
    {
        title : "Third post",
        place : 2,
        interest : 3,
        view : "Yes",
        date : "2022.02.23~2022.11.25",
        id:3
    }
];

export const trending = (req,res) => {
    return res.render("home", {pageTitle: "Home", exhibitions})
};

// export const post = (req,res) => res.send("Post Exhibition"); // 전시회 상세 정보
export const watch = (req,res) => {
    const { id } = req.params;    // req.params에서 id를 받았고, (exhibitionRouter.js)
    // console.log("Show exhibition", id); 
    const exhibition = exhibitions[id - 1];    // 이 id를 이용해서 비디오를 찾을 거고
    return res.render("watch", { pageTitle: `Watching:  ${exhibition.title}`, exhibition})
};   // 전시회 보기 , exhibition(watch)라는 template를 render 해줄 거임 watch.pug


export const getEdit = (req,res) => {
    const { id } = req.params;    
    const exhibition = exhibitions[id - 1];     // 수정할 전시회
    return res.render("edit" , { pageTitle: `Editing: ${exhibition.title}`, exhibition } );
};  // 전시회 수정 // html 파일 가져오기 : res.sendfile("./include/post.html");
// 먼저, 유저(우리는 관리자)가 getEdit으로 올 거야. 그러면 우린 편집용 form을 render시켜 줄 거고, 유저(관리자)가 submit을 하면,
// 우리의 post request로 이동해서 postEdit가 처리를 해줄 텐데, postEdit은 route로부터 id를 얻어와서, /exhibition/post/${id} 페이지로 redirect시켜준다.

export const postEdit = (req,res) => {
    const { id } = req.params;
    const { title } = req.body;
    exhibitions[id - 1].title = title;
    return res.redirect(`/exhibition/post/${id}`);
};

export const getUpload = (req,res) => {
    return res.render("upload", {pageTitle: "Upload exhibition"});
};   // 전시회 업로드

export const postUpload = (req,res) => {
    
    // here we will add a video to the videos array.
    return res.redirect("/");
};





export const search = (req,res) => res.send("Search");  // 전시회 검색

export const country = (req,res) => res.send("Country Exhibition");    // 전시회 지역별 보기

// export const remove = (req,res) => res.send("Delete Exhibition");   // 전시회 삭제
export const deleteExhibition = (req,res) => {
    return res.send("Delete Exhibition");
}; // 전시회 삭제




