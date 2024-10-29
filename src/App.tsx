import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/LoginPage";  
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import EventPage from "./pages/EventPage";
import BusinessPage from "./pages/BusinessPage"; // Corrigido o nome do componente
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Adicionada a rota /login */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/eventos" element={<EventPage />} />
        <Route path="/negocios" element={<BusinessPage />} /> {/* Corrigido o nome do componente */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
