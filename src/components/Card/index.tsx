import { PokemonType } from '../../@types/PokemonType';
import { getNumber, slugToCapitalized } from '../../utils/data';
import { CategoryPills } from '../CategoryPills';
import { BackgroundCard, Id, Title } from './styles';

interface IHomeCardProps {
    pokemon: PokemonType;
}

export const Card: React.FC<IHomeCardProps> = ({ pokemon }) => {
    // const pokemonId = useMemo(() => convertUrlToId(pokemon.url), [pokemon.url]);
    return (
        <BackgroundCard
            className={`card text-white border-0 align-self-stretch w-100 p-2 ${pokemon.color.name}`}
        >
            <div className="card-body p-0">
                <Id
                    className={`fw-bold text-end ${pokemon.color.name}`}
                >{`#${getNumber(pokemon.id)}`}</Id>
                <div className="d-flex">
                    <div style={{ flexBasis: '50%' }}>
                        <h1
                            className="card-title text-start mb-2 mt-0"
                            style={{ lineHeight: '10px' }}
                        >
                            <Title
                                to={`/${pokemon.name}`}
                                className={`${pokemon.color.name} stretched-link`}
                            >
                                {slugToCapitalized(pokemon.name)}
                            </Title>
                        </h1>
                        <CategoryPills
                            color={pokemon.color.name}
                            categories={pokemon.meta[0].types}
                        />
                    </div>
                    <div
                        className="d-flex align-items-end text-end flex-shrink-0"
                        style={{ flexBasis: '50%' }}
                    >
                        <img
                            className="img-fluid"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png `}
                            alt={pokemon.name}
                        />
                    </div>
                </div>
            </div>
        </BackgroundCard>
    );
};
