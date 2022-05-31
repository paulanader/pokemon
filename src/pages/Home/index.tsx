import { Fragment, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { Wrapper } from '../../components/Wrapper';
import { usePokemons } from '../../hook/PokemonProvider';

const Home: React.FC = () => {
    const { pokemons, isLoading, pageCount, currentPage, getPokemons } =
        usePokemons();

    useEffect(() => {
        getPokemons(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Header />
            {isLoading && <Loading />}
            {!isLoading && (
                <Container>
                    <h1 className="fw-bold mt-4 mb-4 text-wrap">
                        Qual pokémon você escolheria?
                    </h1>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 justify-content-center pb-5">
                        {pokemons.map(pokemon => {
                            return (
                                <Fragment key={pokemon.name}>
                                    <Card pokemon={pokemon} />
                                </Fragment>
                            );
                        })}
                    </div>
                    <Pagination
                        pageCount={pageCount}
                        forcePage={currentPage - 1}
                        onPageChange={event => getPokemons(event.selected + 1)}
                    />
                </Container>
            )}
            <Footer />
        </Wrapper>
    );
};

export default Home;
