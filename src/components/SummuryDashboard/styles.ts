import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin: 2rem;
  div {
    background: var(--white);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--shape);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    p {
      color: var(--shape);
      font-weight: 600;
      font-size: 1.5rem;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      color: var(--shape);
    }
    &.total-card {
      background: var(--green);
      color: var(--white);
    }
  }
`;
