import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Conteúdo</h1>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;
