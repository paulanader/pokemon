import { useMemo } from 'react';
import { PokemonType } from '../../@type/PokemonType';
import { convertUrlToId, slugToCapitalized } from '../../utils/data';
import { BackgroundCard, Picture, Title } from './styles';

interface IHomeCardProps {
    pokemon: PokemonType;
}

export const Card: React.FC<IHomeCardProps> = ({ pokemon }) => {
    const pokemonId = useMemo(() => convertUrlToId(pokemon.url), [pokemon.url]);
    return (
        <div className="col d-flex h-100 p-2">
            <BackgroundCard className="card  border-0 align-self-stretch w-100 p-3">
                <div className="card-body">
                    <h1 className="card-title text-start fs-sm mb-2 mt-0">
                        <Title to={`/${pokemon.name}`} className="text-dark">
                            {slugToCapitalized(pokemon.name)}
                        </Title>
                    </h1>
                    <div className="text-end">
                        <Picture
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png `}
                            alt={pokemon.name}
                        />
                    </div>
                </div>
            </BackgroundCard>
        </div>
    );
};
