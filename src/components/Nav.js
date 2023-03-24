import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isClick, navIndexState } from "../atom";
import useMoveElement from "../useMoveElement";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100vw;
  align-items: center;
  background-color: black;
  > h2 {
    color: white;
    :hover {
      cursor: pointer;
    }
  }
  .focusNav {
    border-bottom: 2px solid white;
  }
  .portfolioNav {
    margin-right: auto;
    margin-left: 1rem;
  }
  .navRight {
    margin-right: 1rem;
  }
`;

const Nav = ({ moveToElement }) => {
  const [id, sId] = useRecoilState(navIndexState);

  const { navClassName } = useMoveElement();

  const navTap = [
    {
      title: "Portfolio",
      className: "portfolioNav",
    },
    {
      title: "Contact",
    },
    {
      title: "About Me",
    },
    {
      title: "Skills",
    },
    {
      title: "Project",
    },
  ];

  const onClickNavName = (index) => {
    sId(index);
    moveToElement(index);
  };

  return (
    <NavContainer>
      {navTap.map((tapName, index) => {
        const { title, className } = tapName;
        return (
          <h2
            key={title}
            className={navClassName(className, index)}
            onClick={() => onClickNavName(index)}
          >
            {title}
          </h2>
        );
      })}
    </NavContainer>
  );
};

export default Nav;
