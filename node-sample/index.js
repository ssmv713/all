import axios from "axios";

// 네트워크 통신 (요청과 응답)
// 데이터를 요청 ( request )

// GET : 데이터를 가져오는 역할
// 회원의 목록, 특정 회원의 정보

// POST : 데이터를 추가한다 (서버로)
// 회원가입, 게시판의 게시글 등록

axios
  .get("https://api.ssakduk.com/api/v1/notice?page=1&size=10")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

// status : 서버에서 응답이 잘 왔는지를 숫자 코드로 받는 것
// 200 : 정상

// statusText : 서버에서 보내주는 간단한 메시지

// header : 응답에 대한 설명
// body : 전달 받은 데이터 그 자체
