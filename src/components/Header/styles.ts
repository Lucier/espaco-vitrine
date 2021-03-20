import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  background: var(--blue-light);
  img {
    width: 135px;
    margin: 0 25px;
  }
  nav ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 20px;
      font-weight: 600;
      cursor: pointer;
      a {
        font-size: 15px;
        text-decoration: none;
        color: var(--shape);
      }
    }
  }
  svg {
    margin-left: auto;
    margin-right: 25px;
    cursor: pointer;
  }
`;
