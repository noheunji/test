export const join = (req,res) => res.send("Join"); // 회원가입
export const edit = (req,res) => res.send("Edit User"); // 유저 편집
export const remove = (req,res) => res.send("Remove User"); // 유저 편집 , js에서 delete는 이미 정의 되어 있어서 변수명 X
export const login = (req,res) => res.send("Login");    // 로그인
export const logout = (req,res) => res.send("Log out");  // 로그아웃
export const see = (req,res) => res.send("See User, mypage");
