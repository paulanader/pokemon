import styled from 'styled-components';

export const OverFlow = styled.ul`
    overflow-x: scroll;
    flex-wrap: nowrap;

    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        overflow-x: auto;
    }
`;

export const StylesPill = styled.div`
    border-radius: 20px;
    font-size: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    padding: 0 15px;
    margin-right: 0.5rem;

    &.pill-yellow,
    &.pill-blue {
        color: var(--dark);
    }

    &.pill-white {
        color: var(--dark);
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
