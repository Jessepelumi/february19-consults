"use client";

import { NavigationStyle } from "@/styles/components/navigation.style";
import NavLinks from "./navlinks";

export default function Navigation() {
  return (
    <NavigationStyle className="nav">
      <b>Feburary19</b>
      <NavLinks />
    </NavigationStyle>
  );
}
