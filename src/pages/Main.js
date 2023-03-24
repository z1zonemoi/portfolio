import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Title from "../components/Title";
import useMoveElement from "../useMoveElement";

const MainContainer = styled.div``;

const Main = () => {
  const { element, moveToElement } = useMoveElement();
  return (
    <MainContainer>
      <Nav moveToElement={moveToElement} />
      <Title ref={element} />
      <Contact ref={element} />
      <AboutMe ref={element} />
      <Skills ref={element} />
      <Project ref={element} />
    </MainContainer>
  );
};

export default Main;
