import red from "@material-ui/core/colors/red";
import { createTheme } from "@material-ui/core/styles";

// A custom default theme for this app
const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: "#FF6B6B",
    },
    secondary: {
      main: "#012443",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#FDD2BF",
      default: "#fff",
    },
    text: {
      primary: "#012443",
      secondary: "#fff",
    },
    action: {
      active: "#012443",
    },
  },
});

export default DefaultTheme;
