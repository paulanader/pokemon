import { MdArrowBackIos } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getNumber, getUppercase } from '../../utils/data';
import { MainHeader } from './styles';
import { PokemonType } from '../../@types/PokemonType';
import { CategoryType } from '../../@types/CategoryType';
import { PokemonSpecieType } from '../../@types/PokemonSpecieType';
import { CategoryPills } from '../CategoryPills';

interface IPokemonHeaderProps {
    title: string;
    pokemon?: PokemonType;
    categories: CategoryType[];
    pokemonSpecie: PokemonSpecieType;
}

const PokemonHeader: React.FC<IPokemonHeaderProps> = ({
    title,
    pokemon,
    categories,
    pokemonSpecie,
}) => {
    return (
        <header>
            <MainHeader className="container">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link to="/" className={`${pokemonSpecie.color.name}`}>
                        <MdArrowBackIos size={22} />
                    </Link>
                    <IoMdHeartEmpty size={22} />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h1>{getUppercase(title)}</h1>
                    {pokemon && (
                        <span className="fw-bold">{`#${getNumber(
                            pokemon.id
                        )}`}</span>
                    )}
                </div>
                <div>
                    <CategoryPills
                        categories={categories}
                        color={pokemonSpecie.color.name}
                    />
                </div>
            </MainHeader>
        </header>
    );
};

export default PokemonHeader;
