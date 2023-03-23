import styled from "styled-components";

const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
  width: 20rem;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;
  background-color: #e7e7e7;
  .media {
    background-color: #d9d9d9;
    width: 3.8rem;
    height: 3.8rem;
    margin: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    :hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
  .information {
    margin-left: 1rem;
  }
  > div {
    > a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
`;

const Sns = ({ children, information }) => {
  return (
    <SnsContainer>
      <div className="media">
        <a href={`https://${information}`}>{children}</a>
      </div>
      <div className="information">
        <a href={`https://${information}`}>{information}</a>
      </div>
    </SnsContainer>
  );
};

export default Sns;
