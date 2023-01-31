import { termList } from "./data.js";

const term_container = document.querySelector(".term_container");

termList.forEach((userData) => {
  // true/ false
  const isRequired = userData.isRequired;
  const label = isRequired ? "[필수]" : "[선택]";
  const classLabel = isRequired ? "singleAgree_btn" : "optionalAgree_btn";

  // 삼항 연산자 condition ? A : B;

  term_container.innerHTML += `
      <div class="info_box">
         <input type="checkbox" class="${classLabel}">
  
          
          <input type="button" id="term_context" class="clicks" value = "${userData.title}" data-content = "${userData.content}"
            data-true = "${userData.isRequired}" data-id = "${userData.id}">
          <p>${label}</p>
          
      </div>
  `;
});

const term = document.querySelectorAll(".clicks");

term.forEach((element) => {
  const content = element.dataset.content;

  element.addEventListener("click", function () {
    if ((element.dataset.true = true)) {
      alert(content);
    }
  });

  console.log(element.dataset.id);
});

// 전체동의하기
const $allAgree_btn = document.getElementById("allAgree_btn");
const $single_btns = [...document.querySelectorAll(".singleAgree_btn")];

// 1)///////
function selectAll() {
  $single_btns.forEach((singleBtn) => {
    singleBtn.checked = $allAgree_btn.checked;

    singleBtn.addEventListener("click", function () {
      $allAgree_btn.checked = $single_btns.every((value) => value.checked);
    });
  });
}

$allAgree_btn.addEventListener("click", selectAll);

// (2)////////

// 9번문제
const data = {
  name: "hong",
  email: "hone@gmail.com",
  password: "hongPA$$W0RD",
  age: 30,
  region: "korea",
  birth: 1990,
};

// 첫번째
// delete data.password;
// console.log(data);

// 두번째;
const { password, ...otherdata } = data;
document.writeln(otherdata);
console.log(otherdata);
