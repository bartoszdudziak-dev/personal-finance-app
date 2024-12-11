import { PaletteOptions } from "@mui/material";

interface customColorsObject {
  [key: string]: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    secondaryColors: customColorsObject;
    otherColors: customColorsObject;
    neutralColors: customColorsObject;
  }
  interface PaletteOptions {
    secondaryColors?: customColorsObject;
    otherColors?: customColorsObject;
    neutralColors?: customColorsObject;
  }
}

export const palette: PaletteOptions = {
  neutralColors: {
    white: "#FFFFFF",
    beige100: "#F8F4F0",
    beige500: "#98908B",
    grey100: "#F2F2F2",
    grey300: "#B3B3B3",
    grey500: "#696868",
    grey900: "#201F24",
  },
  secondaryColors: {
    green: "#277C78",
    yellow: "#F2CDAC",
    cyan: "#82C9D7",
    navy: "#626070",
    red: "#C94736",
    purple: "#826CB0",
  }, 
  otherColors: {
    purple: "#AF81BA",
    turquoise: "#597C7C",
    brown: "#93674F",
    magenta: "#934F6F",
    blue: "#3F82B2",
    navyGrey: "#97A0AC",
    armyGreen: "#7F9161",
    gold: "#CAB361",
    orange: "#BE6C49",
  },
};
