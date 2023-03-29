import styled from "styled-components";

const CoinsNeverDieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  > div > h2 {
    text-align: center;
    font-size: xx-large;
    font-weight: 700;
    padding-bottom: 1rem;
  }
  > h3 {
    align-self: start;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 2rem 2rem 2rem 2rem;
    /* padding: 2rem 7rem 2rem 7rem; */
    color: gray;
  }
  > h4 {
    align-self: start;
    padding: 1rem 2rem 1rem 2rem;
  }
  > ol {
    align-self: start;
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const ImageContainer = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;

const ImgStyle = styled.img`
  width: 27rem;
`;

const CoinsNeverDie = () => {
  return (
    <CoinsNeverDieContainer>
      <div>
        <h2>Coins Never Die</h2>
        <ImageContainer>
          <ImgStyle
            alt="코인네버다이 반응형"
            src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
          />
          <ImgStyle
            alt="코인네버다이 반응형"
            src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
          />
          <ImgStyle
            alt="코인네버다이 반응형"
            src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
          />
          <ImgStyle
            alt="코인네버다이 반응형"
            src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
          />
          <ImgStyle
            alt="코인네버다이 반응형"
            src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
          />
        </ImageContainer>
      </div>
      <h3>Skills & Tools</h3>
      <h4>
        ⚒️  Next.js 13(app), TypeScript, JavaScript, React-query, Recoil,
        TailWind CSS, Firebase, Vercel, Axios, Prettier
      </h4>
      <h4>🤝  Git, GitHub, Figma, Discord, Zep</h4>
      <h3>목적</h3>
      <ol>
        <li>
          코인 입문자도 쉽게 사용할 수 있는 UI의 코인 모의투자 웹 사이트입니다.
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
      </ol>
      <h3>담당 업무</h3>
      <h4>프론트엔드, Firebase, 팀원</h4>
      <ol>
        <li>이메일/소셜 로그인</li>
        <li>이메일/소셜 회원가입</li>
        <li>로그인 및 회원가입 페이지 반응형</li>
        <li>유저 db 생성 및 관리</li>
        <li>유저 자산 db 생성 및 관리</li>
      </ol>
      <h3>주요 구현 내용</h3>
      <ol>
        <li>
          로고 및 아이콘을 통한 라우트 처리
          <ol>
            <li>
              NEXT.js Image 컴포넌트 사용하여 이미지 파일 관리
              <ol>
                <li>코인 이미지 파일 124kB → 9.3kB 파일 사이즈 감소</li>
                <li>로고 이미지 파일 124kB → 3.8kB 파일 사이즈 감소</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          로그인 및 회원가입 페이지 구현
          <ol>
            <li>회원 가입 폼 내 중복되는 인풋 컴포넌트화 코드 28% 감소</li>
            <li>
              Firebase Authentication 사용 소셜 로그인/회원가입 구현→ 소셜
              로그인 가입률 62.5% 차지
            </li>
          </ol>
        </li>
        <li>
          반응형 웹 구현
          <ol>
            <li>아이폰 12pro 기준(390px)에 맞춘 모바일 웹 디자인 구현</li>
          </ol>
        </li>
        <li>
          유저 자산 db 생성 및 관리
          <ol>
            <li>
              Firebase onSnapshot 메서드를 이용 실시간 데이터 변동 감지 getDocs
              메서드 대비 함수 호출 횟수 감소
            </li>
            <li>
              Firebase 메서드 이용한 데이터 CRUD기능 코드 함수로 모듈화, 추상화
              → 함수를 사용하는 팀원의 Firebase 메서드 숙지를 위한 시간 절감
            </li>
            <li>Firebase Cloud Firestore로 유저 자산 db 생성 및 관리</li>
            <li>
              회원가입 시 초기 자산 생성 구현 성공 및 유저 투자 데이터 보관
            </li>
          </ol>
        </li>
        <li>
          Git Flow와 GitLap Flow를 참고한 master, develop, feat 브랜치 전략과
          커밋 컨벤션 사용으로 협업 능력 강화
        </li>
      </ol>
    </CoinsNeverDieContainer>
  );
};

export default CoinsNeverDie;
