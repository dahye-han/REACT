# reactproject_springboot

## 프로젝트 소개
- Q. 고양이는 하나인데 집사가 둘이면 어떤 일이 벌어질까요?
- A. 고양이가 밥을 먹고도 다른 집사를 속여서 사료를 얻어냅니다.

- 고양이에게 더 이상 속지 않기 위해 사료를 주고 표시를 해야했습니다.
- 사용 언어 
  - React : 리액트를 연습해보고자 만든 프로젝트라서 사용
  - spring boog 
      - 리액트만으로 구현가능해보이지만 리액트와 스프링부트를 연결해보는걸 연습해보고자 사용
      - 추후 DB와 연동 가능하게 개선할 예정

## 프로젝트 내용
- 기본 todo 리스트 변형
- 아침밥, 점심밥, 저녁밥은 기본으로 세팅하고 간식, 영양제 등을 추가할 수 있음
- 오늘 날짜를 상단에 표기
- 체크되지 않은 목록들은 상단에 표기됨
- 모두 체크 하면 "다 먹었다" 라는 문구가 표기됨
<div>
<img width="184" alt="main" src="https://user-images.githubusercontent.com/54923847/101278708-b901f200-3800-11eb-8ac6-5b1528a1b2ab.PNG">
<img width="190" alt="insertmeal" src="https://user-images.githubusercontent.com/54923847/101278709-bd2e0f80-3800-11eb-84af-34d7034b0fdb.PNG">
</div>
<div>
<img width="189" alt="inserandcheck" src="https://user-images.githubusercontent.com/54923847/101278712-bf906980-3800-11eb-92ac-991ce99a4f84.PNG">
<img width="195" alt="eatall" src="https://user-images.githubusercontent.com/54923847/101278713-c15a2d00-3800-11eb-8e8a-a2a545bac499.PNG">
</div>  

## 프로젝트 시작하기
```
./mvnw clean install
```

- jar 파일 실행
```
java -jar target/springAndReact-0.0.1-SNAPSHOT.jar
```
  - http://localhost:8080/
  

