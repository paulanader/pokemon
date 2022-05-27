import { MainFooter } from "./styles";
import LogoFooter from "../../assets/logo-pokemon.png";

const Footer: React.FC = () => {
  return (
    <MainFooter className="mt-auto mb-3 mt-3">
      <img src={LogoFooter} alt="Logo Pokémon" height="60" />
    </MainFooter>
  );
};

export default Footer;
