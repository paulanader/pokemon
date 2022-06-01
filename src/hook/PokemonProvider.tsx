import {
    createContext,
    useCallback,
    useState,
    useContext,
    useMemo,
    useEffect,
} from 'react';
import { CategoryType } from '../@types/CategoryType';
import { PokemonSpecieType } from '../@types/PokemonSpecieType';
import { PokemonType } from '../@types/PokemonType';
import { Api, GraphQL } from '../services/api';

interface IPokemonContextProp {
    pokemons: PokemonType[];
    pokemon: PokemonType | null;
    pokemonSpecie: PokemonSpecieType | null;
    categories: CategoryType[];
    isLoading: boolean;
    isLastPage: boolean;
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
    const [currentPage, setCurrentPage] = useState(0);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemons = useCallback((page = 1) => {
        const limit = 24;
        const offset = limit * (page - 1);
        setIsLoading(true);

        setCurrentPage(page);

        GraphQL.post('/', {
            query: `query listPokemonQuery {
                pokemons: pokemon_v2_pokemonspecies(order_by: {id: asc}, limit:${limit}, offset:${offset}) {
                  name
                  id
                  color: pokemon_v2_pokemoncolor {
                    name
                  }
                  meta: pokemon_v2_pokemons {
                    types: pokemon_v2_pokemontypes {
                      type: pokemon_v2_type {
                        name
                      }
                    }
                  }
                }
              }`,
        })
            .then(response => {
                setPokemons(prev => [
                    ...prev,
                    ...(response?.data?.data?.pokemons ?? []),
                ]);
                if (response?.data?.data?.pokemons?.length < 24) {
                    setIsLastPage(true);
                }
            })
            .catch(() => setIsLastPage(false));
    }, []);

    useEffect(() => {
        getPokemons(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            currentPage,
            pokemon,
            categories,
            isLastPage,
            setCategories,
            getPokemons,
            getPokemon,
            getPokemonSpecies,
        }),
        [
            pokemons,
            pokemonSpecie,
            isLoading,
            currentPage,
            pokemon,
            categories,
            isLastPage,
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
