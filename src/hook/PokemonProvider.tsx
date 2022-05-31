import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
} from 'react';
import { CategoryType } from '../@type/CategoryType';
import { PokemonSpecieType } from '../@type/PokemonSpecieType';
import { PokemonType } from '../@type/PokemonType';
import Api from '../services/api';

interface IPokemonContextProp {
    pokemons: PokemonType[];
    pokemon: PokemonType | null;
    pokemonSpecie: PokemonSpecieType | null;
    categories: CategoryType[];
    isLoading: boolean;
    pageCount: number;
    currentPage: number;
    setCategories: (categories: CategoryType[]) => void;
    getPokemons: (page: number) => void;
    getPokemon: (name?: string) => void;
    getPokemonSpecies: (name?: string) => void;
}

interface IPokemonProviderProps {
    children: React.ReactNode;
}

export const PokemonsContext = createContext<IPokemonContextProp>(
    {} as IPokemonContextProp
);

export const usePokemons = (): IPokemonContextProp => {
    const context = useContext(PokemonsContext);

    if (!context) {
        throw new Error('usePokemons must be within PokemonProvider');
    }

    return context;
};

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
    children,
}) => {
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    const [pokemon, setPokemon] = useState<PokemonType | null>(null);
    const [pokemonSpecie, setPokemonSpecie] =
        useState<PokemonSpecieType | null>(null);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemons = useCallback((page = 1) => {
        const limit = 24;
        const offset = limit * (page - 1);
        setIsLoading(true);

        const params: { page: number; limit: number; offset: number } = {
            page,
            limit,
            offset,
        };

        setCurrentPage(page);

        Api.get('/pokemon', { params })
            .then(response => {
                setPokemons(response?.data?.results);
                setPageCount(
                    limit > 0
                        ? Math.ceil((response.data?.count ?? 0) / limit)
                        : Math.ceil((response.data?.count ?? 0) / 1)
                );
            })
            .catch(() => {
                setPokemons([]);
                setPageCount(0);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getPokemon = useCallback(async (name?: string) => {
        try {
            const response = await Api.get(`/pokemon/${name}`);
            setPokemon(response.data);
            setCategories(response?.data?.types);
        } catch (e) {
            setPokemon(null);
            setCategories([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getPokemonSpecies = useCallback((name?: string) => {
        Api.get(`/pokemon-species/${name}`)
            .then(response => {
                setPokemonSpecie(response.data ?? null);
            })
            .catch(() => {
                setPokemonSpecie(null);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const providerValue = useMemo(
        () => ({
            pokemons,
            pokemonSpecie,
            isLoading,
            pageCount,
            currentPage,
            pokemon,
            categories,
            setCategories,
            getPokemons,
            getPokemon,
            getPokemonSpecies,
        }),
        [
            pokemons,
            pokemonSpecie,
            isLoading,
            pageCount,
            currentPage,
            pokemon,
            categories,
            setCategories,
            getPokemons,
            getPokemon,
            getPokemonSpecies,
        ]
    );

    return (
        <PokemonsContext.Provider value={providerValue}>
            {children}
        </PokemonsContext.Provider>
    );
};
