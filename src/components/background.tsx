import React, { ReactNode } from "react";
import { BackgroundStyle } from "@/styles/background.style";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return <BackgroundStyle>{children}</BackgroundStyle>;
};

export default Background;
