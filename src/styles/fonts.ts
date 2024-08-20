import { css } from "styled-components";

import PPGoshaSansBold from "../fonts/PPGoshaSans-Bold.otf";
import PPGoshaSansRegular from "../fonts/PPGoshaSans-Regular.otf";

const goshaSansBoldWeight = {
  400: PPGoshaSansBold,
};

const goshaSansRegularWeight = {
  400: PPGoshaSansRegular,
};

const goshaSans = {
  name: "GoshaSans",
  bold: goshaSansBoldWeight,
  regular: goshaSansRegularWeight,
};

const createFontFaces = (
  family: { name: string; [key: string]: any },
  style = "regular"
) => {
  let styles = "";

  for (const [weight, format] of Object.entries(family[style])) {
    styles += `
        @font-face {
          font-family: '${family.name}';
          src: url(${format}) format('opentype');
          font-weight: ${weight};
          font-style: ${style};
          font-display: auto;
        }
      `;
  }

  return styles;
};

const goshaSansBold = createFontFaces(goshaSans, "bold");
const goshaSansRegular = createFontFaces(goshaSans);

const Fonts = css`
  ${goshaSansBold}
  ${goshaSansRegular}
`;

export default Fonts;
