import styled from 'styled-components';

export const StylesImage = styled.div`
    border-radius: 10px;
    position: relative;
    width: 45px;
    height: 45px;
    background-size: cover;
    background-position: center center;

    &::after {
        content: '';
        position: absolute;
        top: -6px;
        right: -6px;
        display: block;
        width: 6px;
        height: 6px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: var(--red);
    }
`;
