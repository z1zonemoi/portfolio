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

const MainContainer = styled.div`
  > div {
    max-width: 80rem;
    margin: 0 auto;
  }

  > footer {
    padding: 1rem;
  }
`;

const Main = () => {
  const [id, sId] = useRecoilState(navIndexState);

  const { element, moveToElement } = useMoveElement();

  const option = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const callback = (el, observer) => {
      el.forEach((el) => {
        if (el.intersectionRatio > 0.5) {
          const b = element.current.indexOf(el.target);
          sId(() => b);
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
      <div>
        <Contact ref={element} />
        <AboutMe ref={element} />
        <Skills ref={element} />
        <Project ref={element} />
        <footer>2023 Yujung Choi</footer>
      </div>
    </MainContainer>
  );
};

export default Main;
