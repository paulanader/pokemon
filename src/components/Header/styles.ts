import styled from 'styled-components';

import PokeballImg from '../../assets/pokeball.png';

export const DarkHeader = styled.header`
    background: var(--gray);
    border-radius: 0px 0px 20px 20px;
`;

export const PokebollStyle = styled.div`
    background: var(--lightGray);
    height: 100%;
`;

export const AvatarContainer = styled.div`
    width: 80px;
    height: 80px;
    background-image: url(${PokeballImg});
    background-size: cover;
    background-position: center center;
`;
