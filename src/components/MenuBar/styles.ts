import styled from "styled-components";

interface SidebarProps {
  isActive: boolean;
}

export const Container = styled.div<SidebarProps>`
  transition: all 0.5s ease;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => props.isActive ? '15rem' : '5rem'};

  background: #11101D;
 
  .content {
    margin: 0 1rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Logo = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.isActive ? "space-between" : "center"};
  margin-top: 1rem;
  color: #FFF;

  div {
    display: ${props => props.isActive ? "flex" : "none"};
    align-items: center;
    justify-content: flex-start;

    opacity: ${props => props.isActive ? "1" : "0"};
    visibility: ${props => props.isActive ? "visible" : "hidden"};
    width: ${props => props.isActive ? "100%" : "0%"};

    transition: width 0.5s ease;

    h1 {
      font-size: 1.5rem;
      padding-left: 0.5rem;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    
    background: none;
    border: none;
    color: #FFF;
  }
`;

export const PageList = styled.div<SidebarProps>`
  li {
    list-style: none;

    display: flex;
    align-items: center;

    & + li {
      margin-top: 1rem;
    }

    &:hover .tooltip {
      opacity: ${props => props.isActive ? "0" : "1"};
      visibility: ${props => props.isActive ? "hidden" : "visible"};
      transform: translateY(0%);
      transition: 0.4s ease;
    }

    a {
      display: flex;
      align-items: center;

      height: 3rem;
      width: 100%;

      color: #FFF;
      border-radius: 0.75rem;
      text-decoration: none;

      &:hover {
        color: #11101D;
        background: #FFF;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
      }

      span {
        opacity: ${props => props.isActive ? "1" : "0"};
        visibility: ${props => props.isActive ? "visible" : "hidden"};
        display: ${props => props.isActive ? "block" : "none"};
        width: ${props => props.isActive ? "100%" : "0%"};
        overflow: hidden;

        transition: width 0.5s ease;
      }
    }

    .tooltip {
      position: absolute;
      left: 5.5rem;
      height: 2.5rem;
      width: 7.6rem;
      transform: translateY(-100%);
      
      line-height: 2.1rem;
      text-align: center;
      
      background: #FFF;
      border-radius: 0.75rem;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

      opacity: 1;
      visibility: hidden;
      pointer-events: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Profile = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;

  color: #FFF;

  img {
    width: 3rem;
    border-radius: 25%;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 0.5rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${props => props.isActive ? "100%" : "0%"};
    transition: width 0.4s ease;

    strong, span {
      opacity: ${props => props.isActive ? "1" : "0"};
      visibility: ${props => props.isActive ? "visible" : "hidden"};
      display: ${props => props.isActive ? "block" : "none"};
    }

    strong {
      font-size: 12px;
    }

    span {
      font-size: 10px;
    }
  }

  svg {
    opacity: ${props => props.isActive ? "1" : "0"};
    visibility: ${props => props.isActive ? "visible" : "hidden"};
    display: ${props => props.isActive ? "block" : "none"};
  }
`;