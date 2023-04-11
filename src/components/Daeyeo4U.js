import styled from "styled-components";

import Carousel from "./Carousel";

const Daeyeo4U = () => {
  const daeyeoImages = [
    { alt: "대여가대여 검색", src: "daeyeo/검색.gif" },
    { alt: "대여가대여 결제", src: "daeyeo/결제.gif" },
    { alt: "대여가대여 글등록", src: "daeyeo/글등록.gif" },
    { alt: "대여가대여 마이페이지", src: "daeyeo/마이페이지.gif" },
    { alt: "대여가대여 메인페이지", src: "daeyeo/메인페이지.gif" },
    { alt: "대여가대여 상세페이지", src: "daeyeo/상세페이지.gif" },
    { alt: "대여가대여 예약", src: "daeyeo/예약.gif" },
    { alt: "대여가대여 카테고리", src: "daeyeo/카테고리.gif" },
    { alt: "대여가대여 회원가입", src: "daeyeo/회원가입.gif" },
  ];

  return (
    <CoinsNeverDieContainer>
      <InformationContainer>
        <h2>대여가 대여</h2>
        <h3>공간대여 프로젝트</h3>
        <Carousel images={daeyeoImages} />
      </InformationContainer>
      <Line />
      <LinkContainer>
        <h4>
          <a href="https://github.com/codestates-seb/seb40_main_010">
            🐱 GitHub
          </a>
        </h4>
        <h4>
          <a href="https://www.notion.so/Main-Project-KPT-d9e116e7c3db4a04adc8e48ddf87bee1">
            📓 회고
          </a>
        </h4>
      </LinkContainer>
      <DurationAndPeople>
        <h4>2022.11 ~ 2022.12</h4>
        <h4>FE 3명 | BE 4명</h4>
      </DurationAndPeople>
      <Line />
      <h3>Skills & Tools</h3>
      <h4>
        ⚒️  React.js, React-Router-Dom, Recoil, Styled-components, Axios, Amazon
        S3, ESlint, Prettier
      </h4>
      <h4>🤝  Git, GitHub, Figma, Slack, Discord, Zep</h4>
      <Line />
      <h3>설명</h3>
      <ul>
        <li>사용자가 소유 공간을 카테고리별로 등록할 수 있습니다.</li>
        <li>
          사용자가 원하는 장소를 검색 및 카테고리를 통해 찾을 수 있습니다.
        </li>
        <li>
          사용자는 플랫폼에 등록된 공간을 원하는 시간을 선택해 예약할 수
          있습니다.
        </li>
        <li>
          사용자와 같은 MBTI 유형의 사용자가 많이 예약한 베스트 공간을 추천하는
          기능이 있습니다.
        </li>
        <li>
          마이페이지에서 등록내역, 예약내역, 관심 장소, 리뷰내역, 결제 진행
          상황을 조회할 수 있습니다.
        </li>
      </ul>
      <Line />
      <h3>담당 업무</h3>
      <h4>프론트엔드</h4>
      <ul>
        <li>전체게시글</li>
        <li>MBTI 추천 장소</li>
        <li>카테고리</li>
        <li>검색</li>
        <li>상세 페이지 상세 정보</li>
        <li>결제</li>
        <li>토큰 리이슈</li>
        <li>로그아웃</li>
        <li>라우터 담당</li>
      </ul>
      <Line />
      <h3>주요 구현 내용</h3>
      <ul>
        <li>
          전체 게시글 무한스크롤 구현
          <ul>
            <li>
              Intersection Observer API 사용하여 요소 관측 시 api 요청으로
              scroll event와 대비 시 <span>api 요청 횟수 감소</span>
            </li>
          </ul>
        </li>
        <li>
          Nav 컴포넌트 버튼 라우팅 처리
          <ul>
            <li>
              버튼 컴포넌트 중첩 삼항 연산자 제거 후 if문으로 변경 nav.jsx
              리턴문 내 코드 <span>93% 감소</span>
            </li>
            <li>
              useLocation의 path를 이용한 코드 useMatch로 변경 → 경로가
              일치하는지 확인하는 <span>절차 감소</span>
            </li>
          </ul>
        </li>
        <li>
          JWT 토큰 리이슈
          <ul>
            <li>
              jwt_decode 라이브러리 사용 <span>토큰 디코딩</span> 후 유효시간
              계산하여 토큰 만료 3분 전 access 토큰 재요청
            </li>
          </ul>
        </li>
        <li>
          상세 페이지 상세정보 구현
          <ul>
            <li>
              react-route-dom을 이용하여 장소 식별자 파라미터 처리 → 새로고침 시{" "}
              <span>상태 초기화 방지</span>
            </li>
            <li>kakao map api 사용하여 장소 마커 표시</li>
          </ul>
        </li>
        <li>
          결제
          <ul>
            <li>마이페이지 예약 내역에서 사용자의 결제 진행 상황을 표시</li>
          </ul>
        </li>
        <li>서버 배포 전 ngrok, 배포 후 ec2와의 API 통신</li>
        <li>github action을 통한 AWS S3 파이프라인 구축 CICD 경험</li>
      </ul>
    </CoinsNeverDieContainer>
  );
};

export default Daeyeo4U;

const CoinsNeverDieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  line-height: 1.7rem;
  span {
    color: #655dbb;
    border-radius: 0.2rem;
    font-weight: 700;
    background-color: #f1f2f6;
    padding: 0.2rem;
    :hover {
      background-color: #655dbb;
      color: #f1f2f6;
      transition: 0.7s;
    }
  }
  > div {
    > h2 {
      text-align: center;
      font-size: xx-large;
      font-weight: 700;
      padding-bottom: 1rem;
    }
    > h3 {
      text-align: center;
      color: gray;
    }
  }
  > h3 {
    align-self: start;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0.2rem 2rem 0.2rem 2rem;
    /* padding: 2rem 7rem 2rem 7rem; */
    color: #655dbb;
  }
  > h4 {
    align-self: start;
    margin: 1rem 2rem 1rem 2rem;
  }
  > ul {
    align-self: start;
    padding: 1rem 2rem 2rem 3rem;
    list-style: disc;
    > li {
      padding-bottom: 0.5rem;
      &::marker {
        color: #655dbb;
      }
      > ul {
        color: #2f3542;
        list-style: circle;
        > li {
          margin-left: 1rem;
          &::marker {
            color: #655dbb;
          }
          > ul {
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;

const InformationContainer = styled.div`
  margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-self: start;
  > h4 {
    font-size: 1rem;
    font-weight: 700;
    > a {
      text-decoration: none;
      color: black;
      margin-right: 1.2rem;
      :hover {
        cursor: pointer;
        color: #655dbb;
        transition: 0.5s;
      }
    }
  }
`;

const Line = styled.div`
  width: 97%;
  border-bottom: 1px solid #ecf2ff;
  margin: 1rem;
`;

const DurationAndPeople = styled.div`
  align-self: start;
  margin: 1rem 2rem 0.2rem 2rem;
`;
