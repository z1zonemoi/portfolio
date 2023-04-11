import styled from "styled-components";

import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";

const Sns = ({ children, information }) => {
  const icons = (children) => {
    if (children === "Email") return <MdEmail id="gmail" />;
    if (children === "GitHub") return <BsGithub id="github" />;
    if (children === "Blog") return <SiTistory id="tistory" />;
  };

  return (
    <SnsContainer>
      <div className="media">
        <a href={`https://${information}`}>{icons(children)}</a>
      </div>
      <div className="information">
        <a href={`https://${information}`}>{information}</a>
      </div>
    </SnsContainer>
  );
};

export default Sns;

const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 20rem;
  margin-top: 1rem;

  .media {
    :hover {
      cursor: pointer;
    }
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
  }

  .information {
    margin-left: 1rem;
  }

  > div {
    > a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      margin-top: 0.5rem;
    }
  }

  :hover {
    > div > a {
      cursor: pointer;
      color: #bface2;
      transition: 0.7s;
    }
  }

  #tistory {
    font-size: 1.7rem;
  }

  #gmail {
    font-size: 2.2rem;
  }
`;
