import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  background: var(--backgroundCard);
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .data_patient {
    display: flex;
    flex-direction: column;
    align-items: left;
    background: var(--blue-100);
    border-radius: 1.25rem;

    .personal {
      display: flex;
      align-items: center;
      margin: 1.25rem;

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
      margin: 1.25rem;

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
      margin: 1.25rem;
      span {
        margin-left: 1.25rem;
        background: var(--white);
        border-radius: 1.25rem;
        padding: 0.5rem;
      }
    }
  }
`;
