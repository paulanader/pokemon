import { Container, Cover } from './styles';

const Pokeball: React.FC = () => {
    return (
        <Container>
            <Cover className="me-3 d-inline-flex rounded-circle">
                <h1>Perfil</h1>
            </Cover>
        </Container>
    );
};

export default Pokeball;
