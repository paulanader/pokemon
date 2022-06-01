import { PokemonProvider } from './hook/PokemonProvider';
import { PagesRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <PokemonProvider>
                <PagesRoutes />
            </PokemonProvider>
        </>
    );
};

export default App;
