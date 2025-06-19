부산 여행 일정 관리 프로젝트
프로젝트 설명
이 프로젝트는 부산 관광지를 중심으로 여행 일정을 관리하고, Tmap API를 활용하여 관광지 위치와 이동 경로를 지도에 표시하는 웹 애플리케이션입니다. 사용자는 관광지를 검색하여 일정에 추가하거나 삭제할 수 있으며, 드래그 앤 드롭으로 관광지 순서를 자유롭게 조정할 수 있습니다.

주요 기능
관광지 검색 및 추가

관광지 목록에서 검색하여 원하는 날짜에 추가

드래그 앤 드롭 일정 관리

관광지 순서를 드래그 앤 드롭으로 자유롭게 변경

Tmap API 연동

각 일자별로 관광지 위치를 지도에 마커로 표시

관광지 간 이동 경로를 실선으로 연결

일자 추가/제거

여행 일수를 동적으로 조정

관광지 삭제

일정에서 관광지를 삭제 가능

반응형 UI

다양한 디바이스에서 사용 가능

프로젝트 구조
text
src/
  components/
    TouristList.js
    ...
  data/
    samplePlaces.js (선택적)
  pages/
    TravelPlanPage.js
    ...
public/
  images/
    ...
index.html
README.md
설치 및 실행 방법
프로젝트 복제

bash
git clone https://github.com/your-repository/travel-planner.git
cd travel-planner
의존성 설치

bash
npm install
프로젝트 실행

bash
npm start
브라우저에서 확인

http://localhost:3000 접속

사용 방법
여행 일정 생성

설문조사 또는 직접 관광지를 추가하여 일정 생성

관광지 검색 및 추가

검색창에서 관광지 검색 후 원하는 날짜에 추가

드래그 앤 드롭으로 순서 변경

관광지 카드를 드래그하여 순서 조정

일자 추가/제거

일자 추가/제거 버튼으로 여행 기간 조정

관광지 삭제

삭제 버튼으로 관광지 삭제

지도 확인

각 일자별로 관광지 위치와 이동 경로가 Tmap에 표시

기술 스택
Frontend

React

Material-UI

react-beautiful-dnd (드래그 앤 드롭)

지도

Tmap API (JavaScript SDK)

참고 사항
Tmap API 키는 프로젝트 내에 하드코딩되어 있습니다.

실제 배포 시 환경변수(.env)로 분리 권장

관광지 데이터는 samplePlaces.js 또는 직접 입력 가능

이미지는 public/images 폴더에 저장

라이선스
MIT License

===기말 발표 완===
