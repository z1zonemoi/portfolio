import styled from "styled-components";
import Sns from "./Sns";

const ContactContainer = styled.div`
  padding: 3rem;
  height: fit-content;
  /* border: 1px solid red; */
  > h2 {
    font-size: xx-large;
    font-weight: 600;
  }
  .snsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <div className="snsContainer">
        <Sns information={"zizonemoi@gmail.com"}>Email</Sns>
        <Sns information={"github.com/z1zonemoi"}>GitHub</Sns>
        <Sns information={"zizonemoi.tistory.com"}>Blog</Sns>
      </div>
    </ContactContainer>
  );
};

export default Contact;
