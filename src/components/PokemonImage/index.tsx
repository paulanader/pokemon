import { PokemonType } from '../../@type/PokemonType';
import { Container, Picture } from './styles';

interface IPokemonImageProps {
    pokemon: PokemonType;
}

const PokemonImage: React.FC<IPokemonImageProps> = ({ pokemon }) => {
    return (
        <Container className="text-center justify-content-center">
            <Picture
                src={pokemon?.sprites.other['official-artwork'].front_default}
                alt="Imagem do pokemon selecionado"
            />
        </Container>
    );
};

export default PokemonImage;
