import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Title from "../components/Title";
import useMoveElement from "../useMoveElement";

const Main = () => {
  const { element, moveToElement } = useMoveElement();
  return (
    <div>
      <Nav moveToElement={moveToElement} />
      <Title ref={element} />
      <Contact ref={element} />
      <AboutMe ref={element} />
      <Skills ref={element} />
      <Project ref={element} />
    </div>
  );
};

export default Main;
