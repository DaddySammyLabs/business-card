import { useApp } from "./context/AppContext";

import texts from "./constants/texts";

import Header from "./components/screens/header/Header";
import Home from "./components/pages/Home";

function App() {
  const { language } = useApp();

  return (
    <>
      <div className="apps">
        <Header texts={texts[language]} />

        <Home texts={texts[language]} />
      </div>
    </>
  );
}

export default App;
