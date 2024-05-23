const express = require('express');
const app = express();
const path = require('path');

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // 요청 본문 파싱을 위한 미들웨어

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 하드코딩된 사용자 정보 (실제로는 데이터베이스나 다른 방식으로 관리해야 합니다)
const users = [
 { username: 'admin', password: 'password123' },
 { username: 'normal', password: 'normal1' }
];

// 로그인 페이지 라우트
app.get('/login', (req, res) => {
 res.render('login');
});

// 로그인 처리 라우트
app.post('/login', (req, res) => {
 const { username, password } = req.body;

 // 유효성 검사
 if (!username || username.length < 3 || username.length > 20) {
   return res.status(400).send('아이디는 3글자 이상 20자 이하');
 }

 if (!password || password.length < 6 || password.length > 20) {
   return res.status(400).send('비밀번호는 6글자 이상 20자 이하');
 }

 // 로그인 로직
 const user = users.find(user => user.username === username && user.password === password);
 if (user) {
    // 로그인 성공
    res.redirect('/dashboard?username=' + user.username);
  } else {
    // 로그인 실패
    res.status(401).send('아이디 혹은 비밀번호가 일치하지 않습니다.');
  }
});

// 대시보드 라우트 (로그인 후 페이지)
app.get('/dashboard', (req, res) => {
  const username = req.query.username;

  if (username) {
    res.send(`username: ${username}`);
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});