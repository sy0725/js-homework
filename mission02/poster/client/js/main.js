/* 
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리


1 .먼저 구현 만들기
2. 작게 나누기 / 간소화
3. 위치 정리
*/

// 공통 함수(요소 선택 함수 getNode)
function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입이어야 합니다");
  }
  return document.querySelector(node);
}

function getNodes(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입이어야 합니다");
  }
  return document.querySelectorAll(node);
}

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

// 클릭시 박스 체크

const nav = getNode(".nav ul");

function handleDelegation(list) {
  const children = [...nav.children];

  children.forEach((li) => {
    li.classList.remove("is-active");
  });

  list.classList.add("is-active");
}

// 클릭시 이미지 변경

function setImage(name, alt) {
  const visual = getNode(".visual img");

  visual.src = `./assets/${name}.jpeg`;
  visual.alt = alt;
}

// 클릭시 배경 변경

function setBgColor([colorA , colorB = '#000' ]) {
  const body = getNode("body");
//   const colorA = color[0]
//   const colorB = color[1]


 body.style.background = `linear-gradient(to bottom, ${colorA},${colorB}`;
}

// 클릭시 텍스트 변경

function setNameText(name) {
  const nickName = getNode(".nickName");

  nickName.textContent = name;
}

function handleEvent(e) {
  const target = e.target;
  const list = target.closest("li");
  if (!list) {
    return;
  }

  const index = list.dataset.index;

  const color = data[index - 1].color;
  const name = data[index - 1].name;
  const alt = data[index - 1].alt;

  handleDelegation(list);
  setBgColor(color);
  setImage(name, alt);
  setNameText(name);
}

nav.addEventListener("click", handleEvent);
