import styled from "styled-components";

export const BackgroundStyle = styled.div`
  background-color: var(--primary);
  clip-path: polygon(
    0 0,
    20% 0,
    23% 10%,
    77% 10%,
    80% 0,
    100% 0,
    100% 90%,
    45% 90%,
    23% 90%,
    20% 100%,
    0 100%
  );
  height: 70vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
