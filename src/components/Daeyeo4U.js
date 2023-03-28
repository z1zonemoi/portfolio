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

const Daeyeo4U = () => {
  return (
    <CoinsNeverDieContainer>
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/검색.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/결제.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/글등록.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/마이페이지.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/메인페이지.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/상세페이지.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/예약.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/카테고리.gif"} />
      <ImgStyle src={process.env.PUBLIC_URL + "daeyeo/회원가입.gif"} />
    </CoinsNeverDieContainer>
  );
};

export default Daeyeo4U;
