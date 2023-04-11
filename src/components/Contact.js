import { forwardRef } from "react";
import styled from "styled-components";
import Sns from "./Sns";

const ContactContainer = styled.div`
  padding: 5rem;
  height: fit-content;
  > h2 {
    font-size: xx-large;
    font-weight: 600;
  }
  .snsContainer {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

const Contact = forwardRef((props, ref) => {
  const mySNS = [
    { information: "zizonemoi@gmail.com", name: "Email" },
    { information: "github.com/z1zonemoi", name: "GitHub" },
    { information: "zizonemoi.tistory.com", name: "Blog" },
  ];

  return (
    <ContactContainer ref={(contact) => (ref.current[1] = contact)}>
      <h2>Contact</h2>
      <div className="snsContainer">
        {mySNS.map(({ information, name }) => {
          return (
            <Sns key={name} information={information}>
              {name}
            </Sns>
          );
        })}
      </div>
    </ContactContainer>
  );
});

export default Contact;
