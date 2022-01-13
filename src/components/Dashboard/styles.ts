import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 3.75rem;

  button:focus {
    background: var(--gray-750);
  }

  .buttonActions {
    max-width: 25.62rem;
    margin-top: 3.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .warning {
    color: var(--purple);
    margin-top: 3.75rem;
    font-weight: 600;
    font-size: 1.625rem;
  }

  @media (max-width: 340px) {
    .buttonActions {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
