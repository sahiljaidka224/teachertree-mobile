import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      secondary: string;
      primaryLight: string;
      background: string;
      textSecondary: string;
      border: string;
      textDark: string;
      delete: string;

      textInput: {
        outlinedColor: string;
        background: string;
        placeholder: string;
      };

      button: {
        background: string;
        borderColor: string;
      };
    };
  }
}
