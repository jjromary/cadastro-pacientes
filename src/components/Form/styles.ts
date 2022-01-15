import styled from "styled-components";

export const Container = styled.form`
max-width: 1120px;
margin: 0 auto;

  input {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    border-radius: 1.25rem;
    margin-top: 2.75rem;
    border: 0;
    background: #d6e4ff;
    font-weight: 400;
    font-size: 1rem;
    /* resize: none; */

    & + input {
      margin-top: 1rem;
    }

    ::-webkit-input-placeholder {
      color: #777777;
      padding: 1rem;
    }
  }

  .saveButton{
    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: #3366FF;
      color: #fff;
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

  }

  .labelStatus {
    margin-top: 1.25rem;
    text-align: center;
  }

  select {
    width: 100%;
    padding: 1rem;
    height: 4rem;
    margin-top: 0.5rem;
    border-radius: 1.25rem;
    border: 0;
    background: #d6e4ff;
    font-weight: 400;
    font-size: 1rem;
    resize: none;
   
  }
`;