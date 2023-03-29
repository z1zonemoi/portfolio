import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";

const SnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 20rem;
  margin-top: 1rem;
  /* background-color: #e7e7e7; */
  .media {
    :hover {
      cursor: pointer;
    }
    font-size: 2rem;
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
  const icons = (children) => {
    if (children === "Email") return <MdEmail />;
    if (children === "GitHub") return <BsGithub />;
    if (children === "Blog") return <SiTistory />;
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
