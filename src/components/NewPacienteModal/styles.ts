import styled from "styled-components";

export const Container = styled.form`

  input {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    border-radius: 1.25rem;
    margin-top: 2.75rem;
    border: 0;
    background: #D6E4FF;
    font-weight: 400;
    font-size: 1rem;
    resize: none;

    & + input {
      margin-top: 1rem;
    }

    ::-webkit-input-placeholder{
      color: #777777;
      padding: 1rem;
    }
  }

  button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--blue-500);
      color: #FFF;
      border-radius: 1.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.25rem;
      font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
}
`;
