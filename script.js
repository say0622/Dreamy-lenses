// 카메라 스트림 가져오기
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    var video = document.getElementById('webcamVideo');
    video.srcObject = stream;
    // 로딩 화면 제거
    var loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'none';
  })
  .catch(function(err) {
    console.log("카메라에 접근할 수 없습니다: " + err);
  });

// 배경 이미지와 텍스트 객체
const backgroundsAndTexts = [
{ image: 'music.jpg', text: '환영합니다! 이곳은 감정이 음악으로 표현되는 세상입니다.' },
{ image: 'unicorn.jpg', text: '환영합니다! 이곳은 도심 속 유니콘과 사진찍는 공간입니다.' },
{ image: 'physics.jpg', text: '환영합니다! 이곳은 물리학 개념 속 공간입니다.' },
{ image: 'study.jpg', text: '환영합니다! 이곳은 미래사회 대학생과 스터디윗미 공간입니다.' },
{ image: 'mintchoco.jpg', text: '환영합니다! 이곳은 민트초코에 지배당한 세상입니다.' },
{ image: 'universe.jpg', text: '환영합니다! 이곳은 우주의 끝입니다.' },
{ image: 'panda.jpg', text: '환영합니다! 이곳은 판다와 함께 셀카찍을 수 있는 판다가 가득한 공간입니다.' },
];

// 랜덤 배경 이미지와 텍스트 선택
const randomIndex = Math.floor(Math.random() * backgroundsAndTexts.length);
const randomBackground = backgroundsAndTexts[randomIndex];

// 배경 이미지 스타일 적용
document.body.style.backgroundImage = `url(${randomBackground.image})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';

// 텍스트 변경
const welcomeTextElement = document.querySelector('.welcome-text');
welcomeTextElement.textContent = randomBackground.text;
