import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  margin-top: 0.2rem;
`;

export const Content = styled.ul`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  li {
    width: calc((100% - 4em) / 3);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    background: var(--gray0);

    border: 2px solid var(--gray1);
    border-radius: 5px;

    @media (max-width: 800px) {
      width: calc((100% - 2em) / 2);
    }

    @media (max-width: 540px) {
      width: 100%;
    }

    &:hover {
      box-shadow: 0px 0px 0.2em 1px var(--gray1);
    }

    > div:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--gray0);
      border-radius: 4px;

      > img {
        width: 80%;
      }
    }

    > div:nth-child(2) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      height: 70%;

      > p {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: var(--gray4);
      }

      > span {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: var(--gray4);
      }

      > button {
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

        padding: 0.5rem;
        border: 1px solid var(--greenAqua);
        border-radius: 6px;
        background-color: var(--greenAqua);
        color: var(--gray2);

        &:hover {
          transition: 0.3s;
          border: 1px solid var(--greenAquaLight);
          background-color: var(--greenAquaLight);
          color: var(--gray2);
        }
      }
    }
  }
`;
