import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import NotFound404 from "./components/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route element={<NotFound404 />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
