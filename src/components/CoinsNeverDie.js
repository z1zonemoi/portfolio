import styled from "styled-components";

import Carousel from "./Carousel";

const CoinsNeverDie = () => {
  const coinImages = [
    { alt: "코인네버다이 메인페이지", src: "cnd/cnd-메인-페이지네이션.gif" },
    { alt: "코인네버다이 보유자산", src: "cnd/cnd-보유자산.gif" },
    { alt: "코인네버다이 소셜", src: "cnd/cnd-로그인-소셜.gif" },
    {
      alt: "코인네버다이 회원가입, 이메일",
      src: "cnd/cnd-회원가입-이메일-사이즈.gif",
    },
    {
      alt: "코인네버다이 회원가입, 이메일 반응형",
      src: "cnd/cnd-로그인:회원가입-반응형.gif",
    },
  ];

  return (
    <CoinsNeverDieContainer>
      <InformationContainer>
        <h2>Coins Never Die</h2>
        <h3>코인 모의 투자 프로젝트</h3>
        <Carousel images={coinImages} />
      </InformationContainer>
      <Line />
      <LinkContainer>
        <h4>
          <a href="https://github.com/3-talking-potatoes/coins-never-die">
            🐱 GitHub
          </a>
        </h4>
        <h4>
          <a href="https://www.notion.so/CND-Project-KPT-2c49593353924302a552b890d0f1ed18">
            📓 회고
          </a>
        </h4>
        <h4>
          <a href="https://coins-never-die-j4uc.vercel.app/">✨ 배포</a>
        </h4>
      </LinkContainer>
      <DurationAndPeople>
        <h4>2023.01 ~ 2023.02</h4>
        <h4>FE 3명</h4>
      </DurationAndPeople>
      <Line />
      <h3>Skills & Tools</h3>
      <h4>
        ⚒️  Next.js 13(app), TypeScript, JavaScript, React-query, Recoil,
        TailWind CSS, Firebase, Vercel, Axios, Prettier
      </h4>
      <h4>🤝  Git, GitHub, Figma, Discord, Zep</h4>
      <Line />
      <h3>설명</h3>
      <ul>
        <li>
          코인 입문자도 쉽게 사용할 수 있는 UI의 코인 모의투자 웹
          애플리케이션입니다.
        </li>
        <li>
          코인의 현재가, 변동률, 거래대금을 실시간으로 조회할 수 있습니다.
        </li>
        <li>
          이메일 로그인/회원가입과 구글, 깃허브 로그인/회원가입을 지원합니다.
        </li>
        <li>
          로그인 후 사용자가 원하는 수량 또는 금액을 입력하여 코인을 매수 및
          매도할 수 있습니다.
        </li>
        <li>
          사용자가 보유하고 있는 코인의 수량, 매수 평균가, 평가손익, 수익률을
          확인할 수 있습니다.
        </li>
      </ul>
      <Line />
      <h3>담당 업무</h3>
      <h4>프론트엔드, Firebase</h4>
      <ul>
        <li>이메일/소셜 로그인</li>
        <li>이메일/소셜 회원가입</li>
        <li>로그인 및 회원가입 페이지 반응형</li>
        <li>유저 db 생성 및 관리</li>
        <li>유저 자산 db 생성 및 관리</li>
      </ul>
      <Line />
      <h3>주요 구현 내용</h3>
      <ul>
        <li>
          로고 및 아이콘을 통한 라우트 처리
          <ul>
            <li>
              NEXT.js Image 컴포넌트 사용하여 이미지 파일 관리
              <ul>
                <li>
                  코인 이미지 파일 <span>124kB → 9.3kB 파일 사이즈 감소</span>
                </li>
                <li>
                  로고 이미지 파일 <span>124kB → 3.8kB 파일 사이즈 감소</span>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          로그인 및 회원가입 페이지 구현
          <ul>
            <li>
              회원 가입 폼 내 중복되는 인풋 컴포넌트화 코드{" "}
              <span>28% 감소</span>
            </li>
            <li>
              Firebase Authentication 사용 소셜 로그인/회원가입 구현 → 소셜
              로그인 가입률 <span>62.5% 차지</span>
            </li>
          </ul>
        </li>
        <li>
          반응형 웹 구현
          <ul>
            <li>아이폰 12pro 기준(390px)에 맞춘 모바일 웹 디자인 구현</li>
          </ul>
        </li>
        <li>
          유저 자산 db 생성 및 관리
          <ul>
            <li>
              Firebase onSnapshot 메서드를 이용 실시간 데이터 변동 감지 getDocs
              메서드 대비 <span>함수 호출 횟수 감소</span>
            </li>
            <li>
              Firebase 메서드 이용한 데이터 CRUD기능 코드 함수로 모듈화, 추상화
              → 함수를 사용하는{" "}
              <span>팀원의 Firebase 메서드 숙지를 위한 시간 절감</span>
            </li>
            <li>Firebase Cloud Firestore로 유저 자산 db 생성 및 관리</li>
            <li>
              회원가입 시 초기 자산 생성 구현 성공 및 유저 투자 데이터 보관
            </li>
          </ul>
        </li>
        <li>
          Git Flow와 GitLap Flow를 참고한 master, develop, feat 브랜치 전략과
          커밋 컨벤션 사용으로 협업 능력 강화
        </li>
      </ul>
    </CoinsNeverDieContainer>
  );
};

export default CoinsNeverDie;

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
