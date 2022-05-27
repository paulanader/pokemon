import { PagesRoutes } from "./pageRoutes";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PagesRoutes />
    </>
  );
};

export default App;
