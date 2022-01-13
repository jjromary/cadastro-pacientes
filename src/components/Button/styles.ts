import styled from "styled-components";

export const Container = styled.div`

button {
    font-size: 1rem;
    color: var(--blue-500);
    border: 1px solid #414052;
    border-radius: 1.25rem;
    width: 12rem;
    height: 3rem;
    background: transparent;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 340px){
    button{
      margin-bottom: 1rem;
    }
  }
`;
