import { createTheme } from "@material-ui/core"

const breakpoints = {
  values: {
    xs: 0, // phone
    sm: 375, // phone
    md: 768, // tablet portrait + phone landscape
    lg: 1024, // tablet landscape
    xl: 1440, // desktop
  },
}

const base = {
  breakpoints,
  // 0=4, 1=8, 2=12, 3=16, 4=24, 5=32, 6=48, 7=64, 8=96, 9=128, 10=188
  spacing: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 188],
  typography: {
    fontFamily: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h1: {
      fontSize: "3.75rem", // 60px
      fontWeight: "bold",
      lineHeight: 1.1,
      textTransform: "uppercase",
      [`@media (max-width:580px)`]: {
        fontSize: "1.875rem",
      },
    },
    h2: {
      fontSize: "2.5rem", // 36px
      fontWeight: "bold",
      lineHeight: 1.1,
      [`@media (max-width:580px)`]: {
        fontSize: "1.875rem",
      },
    },
    h3: {
      fontSize: "1.25rem", // 20px
      fontWeight: "bold",
      lineHeight: 1.1,
      letterSpacing: 0.4,
    },
    h4: {
      fontSize: "1.25rem", // 20px
      fontStyle: "italic",
      lineHeight: 1.1,
      letterSpacing: 0.4,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: "normal",
      lineHeight: 1.38,
      letterSpacing: 0.32,
    },
    body2: {
      fontSize: "1.25rem", // 20px
      fontWeight: "normal",
      lineHeight: 1.4,
      letterSpacing: 0.67,
    },
    caption: {
      fontWeight: "normal",
      fontSize: "1rem", // 16px
      lineHeight: 1.375,
      letterSpacing: 0.32,
    },
    button: {
      lineHeight: 1.36,
      fontSize: "1.125rem",
      fontWeight: 900,
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    MuiPaper: {
      elevation5: {
        boxShadow:
          "0px 3px 9px hsl(0deg 0% 0% / 20%), 0px 7px 21px hsl(0deg 0% 0% / 20%), 0px 15px 45px hsl(0deg 0% 0% / 4%)",
      },
      rounded: {
        borderRadius: 6,
      },
    },
    MuiFab: {
      root: {
        boxShadow:
          "0px 3px 9px hsl(0deg 0% 0% / 15%), 0 9px 27px hsl(0deg 0% 0% / 12%), 0px 15px 45px hsl(0deg 0% 0% / 4%)",
      },
      secondary: {
        "&:hover": {
          backgroundColor: "#f7f8f9",
        },
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 464,
      },
    },
    MuiSpeedDialAction: {
      fab: {
        height: 52,
        width: 52,
      },
    },
  },
}

export const light = createTheme({
  ...base,
  palette: {
    type: "light",
    primary: { main: "#f7f8f9", contrastText: "#FFF" },
    secondary: { main: "#FFF", dark: "#00525e" },
    text: { primary: "#000", secondary: "#687373" },
    action: {
      active: "#00525e",
      hover: "#3e7e8b",
    },
  },
})

// dark theme is currently only used in header, so not fully configured
export const dark = createTheme({
  ...base,
  palette: {
    type: "dark",
    primary: { main: "#f7f8f9" },
    text: { primary: "#FFF" },
    action: {
      active: "#FFF",
      hover: "#f7f8f9",
    },
  },
})
