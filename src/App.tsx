import { ApolloProvider } from '@apollo/client';
import { client } from './hook/Apollo';
import { PokemonProvider } from './hook/PokemonProvider';
import { PagesRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <ApolloProvider client={client}>
                <PokemonProvider>
                    <PagesRoutes />
                </PokemonProvider>
            </ApolloProvider>
        </>
    );
};

export default App;
