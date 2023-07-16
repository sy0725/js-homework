
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}


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



