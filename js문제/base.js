// 1번
const arr1 = [20, 8, 4, 9, 2, 1, 3, 6, 0, 7, 10];

arr1.sort(function (a, b) {
  return a - b;
});
arr1.sort((a, b) => a - b);
document.writeln(arr1);

// 2번
const check = () => {
  const num = [1, 2, 3];
  num.forEach(times);
};

const times = (num) => {
  // console.log(num * 1000);
  document.writeln(num * 1000);
};

check();
// 3번

function capitalizeWords(arr) {
  return arr.map((element) => {
    const $upperCase = element.charAt(0).toUpperCase();
    const $lowerCoase = element.slice(1).toLowerCase();
    return $upperCase + $lowerCoase + ", js";
  });
}

const arr3 = ["hello", "hi", "welcome", "great", "awesome"];
document.writeln(capitalizeWords(arr3));

// 4번
const words = ["node", "go", "c", "java", "python", "csharp", "spring"];

const result = words.filter((word) => word.length > 4);

document.writeln(result);

// 5번

const arr5 = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "It has survived not only five centuries,",
];

arr5.forEach((element) => {
  const $result = element.substring(0, 50);
  if (element.length > 50) {
    document.writeln($result + "...");
  } else {
    document.writeln($result);
  }
});
// arr5.forEach((element) => document.writeln(element.substring(0, 50) + "..."));

// 6번

const termList = [
  {
    id: 1,
    title: "서비스 이용 약관",
    content: "서비스 이용 약관 동의 내용",
    description: "",
    isRequired: "필수",
  },
  {
    id: 2,
    title: "개인정보 수집 및 이용 약관",
    content: "개인정보 수집 및 이용 약관 동의 내용",
    description: "",
    isRequired: "필수",
  },
  {
    id: 3,
    title: "광고성 정보 수신",
    content: "광고성 정보 수신 동의 내용",
    description: "다양한 프로모션 정보를 보내드립니다.",
    isRequired: "선택",
  },
];

// 내꺼
// 컨테이너
const term_container = document.querySelector(".term_container");

// userList 배열의 각 요소별 루프 처리
termList.forEach((userData) => {
  // 각 요소 데이터를 쓰기
  term_container.innerHTML += `
      <div class="card">
          <p class="number">${userData.id}</p>
          <p class="title">${userData.title}</p>
          <p class="content">${userData.content}</p>
          <p class="descript">${userData.description}</p>
          <p>${userData.isRequired}</p>
      </div>
  `;
});
// 7번////
const infoList = [
  {
    number: 1,
    email: "simmy@ureca.im",
    name: "심소망",
    description: "웹 프론트엔드 개발자",
  },
  {
    number: 2,
    email: "simmy@ureca.im",
    name: "염지혜",
    description: "리액트 개발자",
  },
  {
    number: 3,
    email: "simmy@ureca.im",
    name: "라정우",
    description: "백엔드 개발자",
  },
  {
    number: 4,
    email: "simmy@ureca.im",
    name: "한장현",
    description: "인프라 관리자",
  },
];

const login_container = document.querySelector(".login_container");

infoList.forEach((userData) => {
  // 각 요소 데이터를 쓰기
  login_container.innerHTML += `
      <div class="info_box" data-content = "${userData.name}" data-name = "${userData.name}">
          <p class="number">${userData.number}</p>
          <p class="email">${userData.email}</p>
         
          <input type='button' class="click"
          value='${userData.name}'
          
          />
          <p class="descript">${userData.description}</p>
          
      </div>
  `;
});

const $clicks = document.querySelectorAll(".click");
const $info_box = document.querySelectorAll(".info_box");
$info_box.forEach((element) =>
  element.addEventListener("click", function () {
    // alert($clicks.value);

    confirm(element.dataset.name + "회원입니다.");
  })
);

// $clicks.forEach((element) =>
//   element.addEventListener("click", function () {
//     // alert($clicks.value);

//     confirm(element.dataset.name + "회원입니다.");
//   })
// );
