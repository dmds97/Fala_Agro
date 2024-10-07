import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import LoginPage from "./pages/LoginPage/index";  
import SignUpPage from "./pages/SignUpPage";
import "./index.css";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
