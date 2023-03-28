import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navIndexState } from "../atom";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Title from "../components/Title";
import useMoveElement from "../useMoveElement";

const MainContainer = styled.div``;

const Main = () => {
  const [id, sId] = useRecoilState(navIndexState);

  const { element, moveToElement } = useMoveElement();

  const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const callback = (el, observer) => {
      el.forEach((el) => {
        if (el.intersectionRatio > 0.1) {
          const b = element.current.indexOf(el.target);
          sId(() => b);
        } else {
        }
      });
    };

    let observer = new IntersectionObserver(callback, option);
    observer.observe(element.current[0]);
    observer.observe(element.current[1]);
    observer.observe(element.current[2]);
    observer.observe(element.current[3]);
    observer.observe(element.current[4]);

    // console.log(element.current);
  }, [element]);

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
