import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.7rem;

  span {
    color: #655dbb;
    border-radius: 0.2rem;
    font-weight: 700;
    background-color: #f1f2f6;
    padding: 0.2rem;
    :hover {
      background-color: #655dbb;
      color: #f1f2f6;
      transition: 0.7s;
    }
  }

  > div {
    > h2 {
      text-align: center;
      font-size: xx-large;
      font-weight: 700;
      padding-bottom: 1rem;
    }
    > h3 {
      text-align: center;
      color: gray;
    }
  }

  > h3 {
    align-self: start;
    font-weight: 700;
    font-size: 1rem;
    margin: 0.2rem 2rem 0.2rem 2rem;
    color: #655dbb;
  }

  > h4 {
    align-self: start;
    margin: 1rem 2rem 1rem 2rem;
    font-size: 0.8rem;
  }

  > ul {
    align-self: start;
    font-size: 0.8rem;
    padding: 1rem 2rem 2rem 3rem;
    list-style: disc;
    > li {
      padding-bottom: 0.5rem;
      &::marker {
        color: #655dbb;
      }
      > ul {
        color: #2f3542;
        list-style: circle;
        > li {
          margin-left: 1rem;
          &::marker {
            color: #655dbb;
          }
          > ul {
            margin-left: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 650px) {
    padding: 3rem;
    > h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1rem;
    }
    ul {
      font-size: 1rem;
    }
  }
`;

export const InformationContainer = styled.div`
  margin-bottom: 1rem;
`;

export const LinkContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-self: start;

  > h4 {
    font-size: 1rem;
    font-weight: 700;
    > a {
      text-decoration: none;
      color: black;
      margin-right: 1.2rem;
      :hover {
        cursor: pointer;
        color: #655dbb;
        transition: 0.5s;
      }
    }
  }
`;

export const Line = styled.div`
  width: 97%;
  border-bottom: 1px solid #ecf2ff;
  margin: 1rem;
`;

export const DurationAndPeople = styled.div`
  align-self: start;
  margin: 1rem 2rem 0.2rem 2rem;
`;
