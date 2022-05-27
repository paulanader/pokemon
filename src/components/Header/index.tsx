import { DarkHeader, MainHeader } from "./styles";

const Header: React.FC = () => {
  return (
    <DarkHeader>
      <MainHeader className="text-white p-4">
        <h1>Olá, Ash Ketchum</h1>
        <span>Bem-vindo!</span>
      </MainHeader>
    </DarkHeader>
  );
};

export default Header;
