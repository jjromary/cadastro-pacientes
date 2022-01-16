import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;

        --blue-100: #D6E4FF;
        --blue-900: #091A7A;
        --blue-500: #3366FF;

        --light-blue-900:#094571;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%; //15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; //14px
      }

      @media (max-width: 435px) {
          font-size: 81.25%; //13px
      }

      
  }

  body {
      background: var(--white);
      -webkit-font-smoothing: antialiased;
      margin-left: 1rem;
      margin-right: 1rem;
  }

  body, input, textarea, button, strong {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: var(--blue-900);
  }

  h1, h2, h3, h4, h5, h6, strong {
      color: var(--blue-900);
      font-weight: 600;
  }

  button {
      cursor: pointer;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    /* height: 597px; */
    background: #FFFFFF;
    padding: 3rem;
    position: relative;
    border-radius: 1.25rem;    
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    color: #A8A8B3;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }
  }

 
  
`;
