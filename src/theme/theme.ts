import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
import PublicSans from "/fonts/PublicSans-VariableFont_wght.ttf";

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'PublicSans';
          font-display: swap;
          src: local('PublicSans'), url(${PublicSans}) format('truetype');
        }
      `,
    },
  },
});
