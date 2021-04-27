import "styled-components";

import "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    dark: {
      main: string;
    };
    background: {
      light: string;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    dark: PaletteColor,
    grey: PaletteOptions,
  }

  interface PaletteColor {
    light: string,
    lighter: string,
    lightest: string,
    dark: string,
    darker: string,
    darkest: string,
  }
  
  interface TypeBackground {
    light: string,
  }

  interface PaletteOptions {    
    main?: PaletteColorOptions,
    light?: PaletteColorOptions,
    lighter?: PaletteColorOptions,
    lightest?: PaletteColorOptions,
    dark?: PaletteColorOptions,
    darker?: PaletteColorOptions,
    darkest?: PaletteColorOptions,
    lightWarning?: PaletteColorOptions;
  }
}