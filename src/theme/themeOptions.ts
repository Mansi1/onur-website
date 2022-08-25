import { ThemeOptions } from "@mui/material/styles/createTheme"
import { GlobalProps } from "@emotion/react"

import "@fontsource/raleway/300.css"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/700.css"

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    desktop: true
  }
}

const primaryColor = '#0019bc'

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 650,
      desktop: 1200,
    },
  },
  palette: {
    primary: { main: primaryColor },
    background: { default: "#EDF2FA" },
  },
  components: {
    MuiButton: {
      styleOverrides:{
        root: { color: '#f6f6f6', fontWeight: 500}
},
      defaultProps: {
        variant: "contained",
      },
    },
  }, 
}

export const globalStyles: GlobalProps["styles"] = {
  a: { color: primaryColor, textDecoration: "none" },
}
