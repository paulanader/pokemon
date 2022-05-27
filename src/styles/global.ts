import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --black90: rgba(0, 0, 0, 0.9)
    --white: #ffffff;
    --light: #f8f9fa;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background: var(--light);
        -webkit-font-smoothing: antialiased;
    }

    body,input, textarea, button {
        font-family: 'Lato';
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    

`;
