# reactproject_springboot

## 프로젝트 소개
- Q. 고양이는 하나인데 집사가 둘이면 어떤 일이 벌어질까요?
- A. 고양이가 밥을 먹고도 다른 집사를 속여서 사료를 얻어냅니다.

- 고양이에게 더 이상 속지 않기 위해 사료를 주고 상대방이 볼 수 있게 표시를 해야했습니다.
- 사용 언어 
  - React : 리액트를 연습해보고자 만든 프로젝트라서 사용
  - spring boog 
      - 리액트만으로 구현가능해보이지만 리액트와 스프링부트를 연결해보는걸 연습해보고자 사용
      - 추후 DB와 연동 가능하게 개선할 예정

## 프로젝트 내용
- 기본 todo 리스트 변형
- 아침밥, 점심밥, 저녁밥은 기본으로 세팅하고 간식, 영양제 등을 추가할 수 있음
- 오늘 날짜를 상단에 표기
- 초기화 버튼을 누를 시 아침밥, 점심밥, 저녁밥 체크해둔것 있으면 체크 해제 및 루가된 사항 제거
<div>
  <img width="45%" src="https://user-images.githubusercontent.com/54923847/100542445-353e8780-328d-11eb-9e43-1f2f9f7891ac.png">
  <img width="45%" src="https://user-images.githubusercontent.com/54923847/100542450-45566700-328d-11eb-99b9-3886a077146c.png">
</div>
<div>
  <img width="45%" src="https://user-images.githubusercontent.com/54923847/100542459-50a99280-328d-11eb-87fb-4dcf933787c7.png">
  <img width="45%" src="https://user-images.githubusercontent.com/54923847/100542462-57380a00-328d-11eb-803e-6d49b67c96c6.png">
</div>  

## 프로젝트 시작하기
- frontend 파일로 이동해서 npm install
```
cd frontend
```
```
npm install
```

- 상위 폴더로 이동후 jar 파일 만들기
```
cd ..
```
```
./mvnw clean install
```

- jar 파일 실행
```
java -jar target/springAndReact-0.0.1-SNAPSHOT.jar
```
  - http://localhost:8080/
  

