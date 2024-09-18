import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { Header } from "./components/Header";
import { useFonts } from "./providers/fonts/FontsProvider";
import { Banner } from "./components/Banner";
import { memo } from "react";

const App = memo(() => {
  const { font } = useFonts();

  return (
    <div className={`max-h-screen ${font === 'Roboto' ? 'font-Roboto' : 'font-Ser'}`}>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </div>
  );
});

App.displayName = 'App';

export default App;