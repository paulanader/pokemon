import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    max-width: 150px;

    @media screen and (max-width: 320px) {
        max-width: 50px;
    }

    @media screen and (max-width: 375px) {
        max-width: 60px;
    }

    @media screen and (max-width: 425px) {
        max-width: 70px;
    }
`;

export const Title = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
`;

export const BackgroundCard = styled.div`
    background-color: var(--green);
    border-radius: 20px;
`;
