// 전체동의

const termList = [
  {
    id: 9,
    title: "이용 약관 9",
    content: "이용 약관 9 내용",
    isRequired: true,
  },
  {
    id: 10,
    title: "이용 약관 10",
    content: "이용 약관 10 내용",
    isRequired: true,
  },
  {
    id: 11,
    title: "이용 약관 11",
    content: "이용 약관 11 내용",
    isRequired: false,
  },
  {
    id: 12,
    title: "이용 약관 12",
    content: "이용 약관 12 내용",
    isRequired: false,
  },
];

const term_container = document.querySelector(".term_container");
const $clicks = document.querySelectorAll(".clicks");
const $btn = document.querySelector("#btn");
termList.forEach((userData) => {
  term_container.innerHTML += `
        <div class="info_box">
           <input type="checkbox" class="singleAgree_btn">
    
            <span>${userData.id}.</span>
            <input type="button" id="term_context" class="clicks" value = "${userData.title}">
            
        </div>
    `;
});

$clicks.forEach((element) =>
  element.addEventListener("click", function () {
    alert("회원입니다.");
  })
);

$btn.addEventListener("click", function () {
  alert("회원입니다.");
});

// 전체동의하기
const $allAgree_btn = document.getElementById("allAgree_btn");
const $single_btns = document.querySelectorAll(".singleAgree_btn");

function selectAll() {
  $single_btns.forEach((singleBtn) => {
    singleBtn.checked = $allAgree_btn.checked;
  });
}

$single_btns.forEach((singleBtn) => {
  singleBtn.addEventListener("click", function () {
    if ($single_btns.checked) {
      selectAll();
    } else {
      return false;
    }
  });
});

$allAgree_btn.addEventListener("click", selectAll);
