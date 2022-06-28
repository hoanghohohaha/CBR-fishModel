import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 12,
          textAlign: "left",
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize:12,
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          
        },
        input: {
          
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 20,
          padding: "6px 36px"
        },
      },
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
      }
    }
  },
  palette: {
    primary: {
      main: "#425D50",
    },
    secondary: {
      main: "#1B4D82",
    },
    background: {
      default: "white",
      paper: "white",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"verdana, helvetica, arial"'
    ].join(","),
    h1: {
      fontSize: "64px",
      fontWeight: 600,
      fontFamily: "verdana, helvetica, arial"
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      fontFamily: "verdana, helvetica, arial"
    },
    h3: {
      fontSize: "19px",
      fontWeight: 400,
      fontFamily: "verdana, helvetica, arial"
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
      fontFamily: "verdana, helvetica, arial"
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "verdana, helvetica, arial"
    },
    h6: {},
    caption: {},
    body1: {
      fontSize: "16px",
      fontFamily: "verdana, helvetica, arial"
    },
    body2: {
      fontSize: "12px",
      fontFamily: "verdana, helvetica, arial"
    },
    button: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: "normal",
      boxShadow: "none"
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1128,
      xl: 1920,
    },
  },
});
