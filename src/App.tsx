import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/LoginPage/index";  
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
