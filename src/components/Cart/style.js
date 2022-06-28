import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-top: 0.2rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > h2 {
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: var(--greenAquaLight);
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 840px) {
      flex-direction: column;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 60%;

      @media (max-width: 840px) {
        width: 100%;
      }

      > li {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        background: var(--gray0);

        border: 2px solid var(--gray1);
        border-radius: 5px;

        > h2 {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: var(--gray4);
          padding: 1rem;
        }

        > div:first-child {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gray0);
          border-radius: 4px;

          @media (max-width: 485px) {
            width: 100%;
          }

          > img {
            width: 90%;
          }
        }

        > div:nth-child(2) {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1rem;

          @media (max-width: 485px) {
            flex-direction: column;
            gap: 0.5rem;
            align-items: flex-start;
          }

          > p {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: var(--gray4);
            width: 40%;

            @media (max-width: 485px) {
              width: 100%;
            }
          }

          > span {
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: var(--gray4);
          }

          > button {
            cursor: pointer;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;

            padding: 0.5rem;
            border: 1px solid var(--purpleDark);
            border-radius: 6px;
            background-color: var(--purpleDark);
            color: var(--gray0);

            &:hover {
              transition: 0.3s;
              border: 1px solid var(--purpleLight);
              background-color: var(--purpleLight);
              color: var(--gray2);
            }
          }
        }
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 35%;
      background: var(--purpleLight);

      border: 2px solid var(--gray1);
      border-radius: 5px;
      padding: 1rem;

      @media (max-width: 840px) {
        width: 100%;
      }

      h2 {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: var(--gray3);
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        justify-content: center;

        p {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: var(--gray4);
        }

        span {
          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          color: var(--gray4);
        }
      }
    }
  }
`;
