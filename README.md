
/ -> Home
/join -> Join   // 회원가입
/login -> Login     // 로그인 
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit My Profile
/users/delete -> Delete My Profile



video = exhbition 
watch = post


/exhibition             // 전시회 여러개? home


/exhibition/upload      // 전시회 업로드 Admin
/exhibition/:id       // 전시회 상세    See exhibition , User
/exhibition/country        // 전시회 지역 User,,,,, -> 어디로 둬야될지 모르겠음 이거 맞나? // 전시-> 지역 -> 업로드?
/exhibition/edit       // 전시회 편집 Admin
/exhibition/:id/delete     // 전시회  삭제 Admin


                       


/qna            // 질문 전체 확인
/qna/:id/watch      // 질문 보기
/qna/edit      // 질문 등록 -> upload 이걸로 바꾸기
/qna/comment  // 답글 등록

삭제 , 편집 -> :id 넣어줘야함 / 파라미터 값 넣어줘야 함



---------------------------------------

공지랑 질문을 어떻게 들어가야 될지 모르겟네
/notice         // 공지 전체확인
/notice/watch   // 공지확인
/notice/watch/edit  // 공지 등록
/notice/watch/delete    // 공지 삭제


/edit-user -> Edit User // 회원 프로필 수정 (마이페이지 수정)
/delte-user -> Delete User // 회원 탈퇴

/country-exhibition -> Country Exhibition   // 전시회 지역별 
/post-exhibition -> Post Exhibition // 전시회 상세보기
/exhibition/upload -> Uplode Exhibition
/edit-exhibition -> Edit Exhibition // 전시회 수정
/delete-exhibition -> Delete Exhibition // 전시회 삭제

/exhibition/post -> Post Exhibition

/exhibition/edit -> Edit Exhibition
/exhibition/delete -> Delete Exhibition

/NOTICE 공지사항
/Q&A 문의사항





video = exhbition 
watch = post


base.pug
    -// title #{pageTitle} | Exhibition -> variable를 text와 섞을 떄
    -// h1=pageTitle 태그에 하나의 variable(변수)값만 집어넣는 경우라면 이렇게 , (h1 pageTitle '='없는 건 그냥 text)

5-8
    mixin post(info) // info는 mixin이 받게 될 데이터
    each exhibition in exhibitions // 전시회 데이터


            + 관람시간, 관람연령
            li #{post.place} 장소.
            li #{post.interest} 분야.
            li #{post.view} 진행중.
            li #{post.date} 전시기간.
            li #{post.id}.

                0 - true
                1 - false


6-3
    exhibitionRouter.route("/post/:id(\\d+)/edit").get(getEdit).post(postEdit); // 하나의 url에 get,post방식을 쓰도록 할 떄 유용함
    //exhibitionRouter.get("/post/:id(\\d+)/edit", getEdit);    
    //exhibitionRouter.post("/post/:id(\\d+)/edit", postEdit);

    // 먼저, 유저(우리는 관리자)가 getEdit으로 올 거야. 그러면 우린 편집용 form을 render시켜 줄 거고, 유저(관리자)가 submit을 하면,
    // 우리의 post request로 이동해서 postEdit가 처리를 해줄 텐데, postEdit은 route로부터 id를 얻어와서, /exhibition/post/${id} 페이지로 redirect시켜준다.

    app.use(express.urlencoded({extended:true})); // form의 value들을 이해할 수 있도록 하고 우리가 쓸 수 있는 자바스크립트 형식으로 변형 시켜줌

-> 유저가 form을 get 하고, 그 form을 post 하면, 그게 우리의 controller를 발동시켜서 유저들이 redirect되거나,
페이지에서 뭔가를 보게 된다.