// 카메라 스트림 가져오기
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    // 성공적으로 스트림을 가져왔을 때 실행
    var video = document.getElementById('webcamVideo');
    video.srcObject = stream;
  })
  .catch(function(err) {
    // 에러 발생 시 실행
    console.log("카메라에 접근할 수 없습니다: " + err);
  });
// 배경 이미지 리스트
const backgroundImages = [
  'https://imgur.com/1HUbXOD.jpg',
  // 더 많은 이미지 URL 추가 가능
];

// 랜덤 배경 이미지 선택
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
const randomBackgroundImage = backgroundImages[randomIndex];

// 배경 이미지 스타일 적용
document.body.style.backgroundImage = `url(${randomBackgroundImage})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
