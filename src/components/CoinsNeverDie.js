import styled from "styled-components";

const CoinsNeverDieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  > h2 {
    font-size: xx-large;
    font-weight: 700;
  }
  > h3 {
    align-self: start;
    padding: 2rem 7rem 2rem 7rem;
  }
`;

const ImgStyle = styled.img`
  width: 70%;
`;

const CoinsNeverDie = () => {
  return (
    <CoinsNeverDieContainer>
      <h2>주요 구현 내용</h2>
      <ImgStyle
        alt="코인네버다이 반응형"
        src={process.env.PUBLIC_URL + "cnd/cnd-로그인:회원가입-반응형.gif"}
      />
      <h3>dkdkdkdkdkdk</h3>
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
    </CoinsNeverDieContainer>
  );
};

export default CoinsNeverDie;
