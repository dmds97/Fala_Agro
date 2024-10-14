import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/LoginPage/index";  
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import EventPage from "./pages/EventPage";
import BussinessPage from "./pages/BusinessPage";
import "./index.css";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/eventos" element={<EventPage />} />
            <Route path="/negocios" element={<BussinessPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
