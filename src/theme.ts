import { createTheme } from "@mui/material/styles";

const rawTheme = createTheme({
  palette: {
    primary: {
      main: "#0034BB",
      dark: "#0034BB",
    },
    secondary: {
      main: "#000000",
    },
    warning: {
      main: "#FE9800",
    },
    error: {
      main: "#BA0000",
    },
    success: {
      main: "#2BBA1D",
    },
    info: {
      main: "#0034BB",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  //   fontFamily: rawTheme.typography.fontFamilySecondary,
  // textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: "rgba(0, 0, 0, 0.2)",
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      color: "#fff",
      fontSize: "60px",
      lineHeight: "1.5",
      fontWeight: "100",
      letterSpacing: "4px",
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 25,
      fontWeight: "300",
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
