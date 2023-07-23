# JavaScript Mission 02

## Requirement

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
- 이벤트 위임
- 반복문

2. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
- 배경색 변경 ( colorB의 기본값은 #000 으로 한다 )

```JS
elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
```

3. 이미지 변경
```JS
target.src = `./assets/${data.name}.jpeg`;
target.alt = data.alt;
```

4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요

```js
target.textContent = data.name;
```

5. 함수를 분리시켜주세요.
- setBgColor 함수
- setImage 함수
- setNameText 함수

6. 가독성이 좋은 코드로 리팩토링 해주세요.


## Description

1. getNode 함수

```JS
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
```


2. 클릭시 박스 체크

```JS
const nav = getNode(".nav ul");

function handleDelegation(list) {
  const children = [...nav.children];

  children.forEach((li) => {
    li.classList.remove("is-active");
  });

  list.classList.add("is-active");
}
```

3. 클릭시 이미지 변경
```JS
function setImage(name, alt) {
  const visual = getNode(".visual img");

  visual.src = `./assets/${name}.jpeg`;
  visual.alt = alt;
}
```

4. 클릭시 배경 변경
```JS
function setBgColor([colorA , colorB = '#000' ]) {
  const body = getNode("body");

 body.style.background = `linear-gradient(to bottom, ${colorA},${colorB}`;
}
```
5. 클릭시 텍스트 변경

```JS
function setNameText(name) {
  const nickName = getNode(".nickName");

  nickName.textContent = name;
}
```

6. 클릭 이벤트
```JS
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
```

## 느낀점

```TXT
이 과제를 통해 얼마나 모자르고 더 열심히 노력해야하는지 깨닫게 되는 과제였습니다.

다시 한번 복습과 실습의 중요성을 깨닫고 더욱 성장할 수 있는 계기가 되었다고 생각합니다
```



