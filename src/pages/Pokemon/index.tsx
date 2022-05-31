import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import Informations from '../../components/Informations';
import { Loading } from '../../components/Loading';
import PokemonHeader from '../../components/PokemonHeader';
import PokemonImage from '../../components/PokemonImage';
import { Wrapper } from '../../components/Wrapper';
import { usePokemons } from '../../hook/PokemonProvider';

const Pokemon: React.FC = () => {
    const {
        pokemon,
        pokemonSpecie,
        categories,
        isLoading,
        getPokemon,
        getPokemonSpecies,
    } = usePokemons();

    const { name } = useParams();

    useEffect(() => {
        getPokemon(name);
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getPokemonSpecies(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            {isLoading && <Loading />}
            {!isLoading && pokemon && pokemonSpecie && (
                <div className={`flex-grow-1 ${pokemonSpecie?.color?.name}`}>
                    <PokemonHeader
                        title={pokemon?.name}
                        pokemon={pokemon}
                        categories={categories}
                        pokemonSpecie={pokemonSpecie}
                    />

                    <Container className="position-relative py-5 text-dark">
                        <div className="p-0 px-md-4 px-lg-5">
                            <PokemonImage pokemon={pokemon} />
                            <Informations
                                pokemon={pokemon}
                                pokemonSpecie={pokemonSpecie}
                            />
                        </div>
                    </Container>
                </div>
            )}
        </Wrapper>
    );
};

export default Pokemon;
