import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { Header } from "./components/Header";
import { useFonts } from "./providers/fonts/FontsProvider";
import { Banner } from "./components/Banner";
import { memo } from "react";
import { PosterPage } from "./pages/PosterPage/PosterPage";

const App = memo(() => {
  const { font } = useFonts();

  return (
    <div className={`max-h-screen ${font === 'Roboto' ? 'font-Roboto' : 'font-Ser'}`}>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/poster" element={<PosterPage />} />
      </Routes>
    </div>
  );
});

App.displayName = 'App';

export default App;