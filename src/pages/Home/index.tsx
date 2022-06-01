import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Wrapper } from '../../components/Wrapper';
import { usePokemons } from '../../hook/PokemonProvider';

const Home: React.FC = () => {
    const { pokemons, isLastPage, currentPage, getPokemons } = usePokemons();

    return (
        <Wrapper>
            <Header />
            {pokemons && (
                <Container>
                    <h1 className="fw-bold fs-6 mt-4 mb-4 text-wrap">
                        Which pokemon would you choose?
                    </h1>
                    <InfiniteScroll
                        className="mt-2"
                        dataLength={pokemons.length}
                        next={() => getPokemons(currentPage + 1)}
                        hasMore={!isLastPage}
                        loader={<Loading />}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen all Pokémons</b>
                            </p>
                        }
                    >
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-xl-4 justify-content-center g-2 g-lg-3">
                            {pokemons.map(pokemon => (
                                <div
                                    className="col d-flex mb-3"
                                    key={`${pokemon.id}`}
                                >
                                    <Card pokemon={pokemon} />
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </Container>
            )}
            <Footer />
        </Wrapper>
    );
};

export default Home;
