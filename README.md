# 💻Programmers Lv.0 문제 풀이

[코딩테스트 입문 | 프로그래머스 스쿨](https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&languages=javascript&page=1, "programmers link")

# 

> **정답률 높은 순**으로, 매일 **4문제씩** 풉니다! (상황에 따라 달라질 예정!)

---
## 👨🏻‍💻Language
|  Name  |                                                                                                                                                        Language                                                                                                                                                        |
|:------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   가람   |                                                                                                     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">                                                                                                     |
|   태희   |                                                                                                     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">                                                                                                     |
|   선근   |                                                                                                     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">                                                                                                     |
|   윤석   |                                                                                                     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">                                                                                                     |
|   선빈   |                                                 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">                                                  |
|   사라   |                                                                                                     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">                                                                                                     |

---
## ❗️문제

- [x] 두 수의 차
- [x] 두 수의 곱
- [x] 나머지 구하기
- [x] 몫 구하기
- [x] 숫자 비교하기
- [x] 나이 출력
- [x] 두 수의 합
- [x] 두 수의 나눗셈
- [x] 각도기
- [x] 짝수의 합
- [x] 배열의 평균값
- [x] 양꼬치
- [x] 배열 두 배 만들기
- [x] 배열 자르기
- [x] 배열 뒤집기
- [x] 중복된 숫자 개수
- [x] 머쓱이보다 키 큰 사람
- [x] 점의 위치 구하기
- [x] 짝수 홀수 개수
---
- [x] 문자열 뒤집기 
- [x] 피자 나눠 먹기 (3)
- [x] 아이스 아메리카노
- [x] 피자 나눠 먹기 (1)
- [x] 최댓값 만들기(1)
- [x] 특정 문자 제거하기
- [x] 중앙값 구하기
- [x] 문자 반복 출력하기
- [x] 옷가게 할인 받기
- [x] 삼각형의 완성조건 (1)
- [x] 순서쌍의 개수
- [x] 모음 제거
- [x] 편지
- [x] 짝수는 싫어요
- [x] 배열의 유사도
- [x] 자릿수 더하기
- [x] 숨어있는 숫자의 덧셈 (1)
- [x] 개미 군단
- [x] 문자열안에 문자열
- [x] 제곱수 판별하기
---
- [x] 암호 해독
- [x] 대문자와 소문자
- [x] 가위 바위 보
- [x] 세균 증식
- [x] 주사위의 개수
- [x] 문자열 정렬하기 (1)
- [x] 직각삼각형 출력하기
- [x] 최댓값 만들기 (2)
- [x] n의 배수 고르기
- [x] 인덱스 바꾸기
- [x] 배열 회전시키기
- [x] 외계행성의 나이
- [x] 가장 큰 수 찾기
- [x] 피자 나눠 먹기 (2)
- [ ] 369게임
- [ ] 약수 구하기
- [ ] 숫자 찾기
- [ ] 합성수 찾기
- [ ] 문자열 정렬하기 (2)
- [ ] 중복된 문자 제거
---
- [ ] 모스부호 (1)
- [ ] A로 B 만들기
- [ ] 2차원으로 만들기
- [ ] 팩토리얼
- [ ] k의 개수
- [ ] 가까운 수
- [ ] 진료순서 정하기
- [ ] 숨어있는 숫자의 덧셈 (2)
- [ ] 한 번만 등장한 문자
- [ ] 이진수 더하기
- [ ] 컨트롤 제트
- [ ] 소인수분해
- [ ] 공 던지기
- [ ] 7의 개수
- [ ] 영어가 싫어요
- [ ] 잘라서 배열로 저장하기
- [ ] 문자열 계산하기
- [ ] 구슬을 나누는 경우의 수
- [ ] 삼각형의 완성조건 (2)
- [ ] 외계어 사전
---
```javascript
const titleEl = document.querySelectorAll("tr a");
const titleList = [];
for (let e of titleEl) {
    titleList.push(e.innerText);
};
```