import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: "#DEE4E7",
    fontColor: "#363537"
};

export const darkTheme = {
    body: "#363537",
    fontColor: "#FAFAFA"
};

export const GlobalStyles = createGlobalStyle`
    body{
        
        background-color: ${props => props.theme.body}
    }
`