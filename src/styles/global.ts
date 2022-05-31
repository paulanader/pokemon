import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --black90: rgba(0, 0, 0, 0.9);
    --dark: #333;
    --gray: #282828;
   --lightGray : #A0AEC0;
    --white: #ffffff;
    --light: #f8f9fa;
    --green: #68d3ae;
    --yellow: #F6E05E;
    --purple: #B794F4;
    --blue: #76E4F7;
    --red: #FC8181;
    --pink: #F687B3;
    --brown: #B7791F;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
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

    .green {
        background-color: var(--green);
        color: var(--white);
    };

    .yellow {
        background-color: var(--yellow);
        color: var(--dark);
    };

    .purple {
        background-color: var(--purple);
        color: var(--white);
    };

    .red {
        background-color: var(--red);
        color: var(--white);
    }

    .blue {
        background-color: var(--blue);
        color: var(--dark);
    };

    .white {
        background-color: var(--white);
        color: var(--dark);
    };

    .brown { 
        background-color: var(--brown);
        color: var(--white);
    };

    .subway-item::after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: var(--red);
        transform: translate(65px, -7px);
    }

    
`;
