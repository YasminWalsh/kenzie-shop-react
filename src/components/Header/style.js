import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--gray2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-shadow: 2px 2px 0.5em 1px var(--gray2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > h2 {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-family: "League Gothic", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: var(--purpleLight);
    > h2 {
      font-family: "League Gothic", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      color: var(--greenAqua);
    }
  }

  > button {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;

    padding: 0.5rem;
    border: 1px solid var(--gray1);
    border-radius: 6px;
    background-color: var(--gray1);
    color: var(--gray0);

    &:hover {
      border: 1px solid var(--gray0);
      background-color: var(--gray0);
      color: var(--gray2);
    }
  }
`;
