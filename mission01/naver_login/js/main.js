const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

console.log(111);
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}


/* 범쌤 코드


const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

let emailPass = false;
let pwPass = false;

// 태그가 가지고 있는 고유한 능력을 지금은 실행하면 x

function handleCheckPw() {
  const value = this.value;

  if (pwReg(value)) {
    this.classList.remove("is--invalid");
    pwPass = true;
  } else {
    this.classList.add("is--invalid");
    pwPass = false;
  }
}

function handleCheckEmail() {
  const value = this.value;

  if (emailReg(this.value)) {
    this.classList.remove("is--invalid");
    emailPass = true;
  } else {
    this.classList.add("is--invalid");
    emailPass = false;
  }
}

function handleLogin(e) {
  e.preventDefault();

  if (emailPass && pwPass) {
    try {
      const id = emailInput.value;
      const pw = pwInput.value;

      const getUserId = user.id;
      const getUserPw = user.pw;

      if (id === getUserId && pw === getUserPw) {
        window.location.href = 'welcome.html'
      } else {
        console.log("정확한 아이디와 비밀번호를 입력해 주세요");
      }
    } catch (e) {
      alert(e.message);
    }


  } else {
    console.log("정확한 아이디와 비밀번호를 입력해 주세요");
  }
}

emailInput.addEventListener("input", handleCheckEmail);
pwInput.addEventListener("input", handleCheckPw);
loginButton.addEventListener("click", handleLogin);

*/


















const emailInput = document.querySelector('.user-email-input')
const pwInput = document.querySelector('.user-password-input')
const btn = document.querySelector('.btn-login')

// 적었을때마다 input 2개

emailInput.addEventListener('input' , function(){
  if(emailReg(emailInput.value)) {
    emailInput.classList.remove('is--invalid')
  } else {
    emailInput.classList.add('is--invalid')
  };
})

pwInput.addEventListener('input', function(){
  if(pwReg(pwInput.value)) {
    pwInput.classList.remove('is--invalid')
  } else {
    pwInput.classList.add('is--invalid')
  }
})

// 로그인버튼을 눌렀을때 btn

btn.addEventListener('click' , function(e){

  e.preventDefault()

  if(emailInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html'
  }
})

function inputValidate(inputEl, validFunc){
  inputEl.addEventListener('input' , function(){
    if(validFunc(inputEl.value)) {
      inputEl.classList.remove('is--invalid')
    } else {
      inputEl.classList.add('is--invalid')
    };
  })
}

inputValidate(emailInput, emailReg);
inputValidate(pwInput, pwReg);

function getElement(e){
document.querySelector(e)
}

console.log(getElement('.user-email-input'));
getElement('.user-password-input')
