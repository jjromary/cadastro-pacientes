import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  background: var(--backgroundCard);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: var(--blue-100);
  border-radius: 1.25rem;

  .data_patient {
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 1.25rem;

    .active {
      display: flex;
      align-items: center;
      margin: 0.5rem;
      span {
        margin-left: 1.25rem;
        background: var(--white);
        border-radius: 1.25rem;
        padding: 0.5rem;
      }
    }

    .personal {
      display: flex;
      align-items: center;
      margin: 0.5rem;

      span {
        margin-left: 1.25rem;
        background: var(--white);
        border-radius: 1.25rem;
        padding: 0.5rem;
      }
    }
    .documentation {
      display: flex;
      align-items: left;
      margin: 0.5rem;

      span {
        margin-left: 1.25rem;
        background: var(--white);
        border-radius: 1.25rem;
        padding: 0.5rem;
      }
    }
    .locality {
      display: flex;
      align-items: left;
      margin: 0.5rem;
      span {
        margin-left: 1.25rem;
        background: var(--white);
        border-radius: 1.25rem;
        padding: 0.5rem;
      }
    }
  }
  .actions {
    margin: 1.25rem;

    button {
      margin-right: 1.25rem;
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      background: var(--blue-500);
      color: #fff;
      border-radius: 1.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
