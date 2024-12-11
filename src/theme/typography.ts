import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
    textLarge: React.CSSProperties;
    textMedium: React.CSSProperties;
    textMediumBold: React.CSSProperties;
    textSmall: React.CSSProperties;
    textSmallBold: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    textLarge?: React.CSSProperties;
    textMedium?: React.CSSProperties;
    textMediumBold?: React.CSSProperties;
    textSmall?: React.CSSProperties;
    textSmallBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
    textLarge: true;
    textMedium: true;
    textMediumBold: true;
    textSmall: true;
    textSmallBold: true;
  }
}

export const typography: TypographyOptions = {
  fontFamily: '"PublicSans", "Arial", "Helvetica", sans-serif',

  title: {
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: "120%",
    letterSpacing: "0px",
  },
  subtitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    lineHeight: "120%",
    letterSpacing: "0px",
  },
  textLarge: {
    fontSize: "1rem",
    fontWeight: "700",
    lineHeight: "150%",
    letterSpacing: "0px",
  },
  textMedium: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "0px",
  },
  textMediumBold: {
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "0px",
  },
  textSmall: {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "150%",
    letterSpacing: "0px",
  },
  textSmallBold: {
    fontSize: "0.75rem",
    fontWeight: "700",
    lineHeight: "150%",
    letterSpacing: "0px",
  },
};
