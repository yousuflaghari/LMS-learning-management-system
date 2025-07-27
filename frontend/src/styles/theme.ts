import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#4361ee",
    primaryLight: "#4895ef",
    primaryDark: "#3f37c9",
    secondary: "#f72585",
    success: "#4cc9f0",
    warning: "#fca311",
    danger: "#e63946",
    background: "#f8f9fa",
    backgroundSecondary: "#e9ecef",
    textPrimary: "#212529",
    textSecondary: "#6c757d",
    textTertiary: "#adb5bd",
    border: "#dee2e6",
    white: "#ffffff",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    circle: "50%",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.1)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.1)",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    largeDesktop: "1200px",
  },
};

export default theme;
