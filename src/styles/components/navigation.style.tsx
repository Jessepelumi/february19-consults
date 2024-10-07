import styled from "styled-components";

export const NavigationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--p-md) var(--pbody-vl);
  color: var(--white);
  background-color: var(--background);
  backdrop-filter: blur(10px);

  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;

  &.no-bg {
    background-color: var(--none);
  }

  b {
    font-size: var(--fs-xl);
  }

  nav {
    width: 25%;
  }
`;
