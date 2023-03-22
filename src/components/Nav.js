import styled from "styled-components";

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
  }
  .portfolioNav {
    margin-right: auto;
    margin-left: 1rem;
  }
  .navRight {
    margin-right: 1rem;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <h2 className="portfolioNav">Portfolio</h2>
      <h2 className="navRight">Contact</h2>
      <h2 className="navRight">About ME</h2>
      <h2 className="navRight">Skills</h2>
      <h2 className="navRight">Project</h2>
    </NavContainer>
  );
};

export default Nav;
