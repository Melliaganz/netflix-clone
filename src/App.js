import './index.css';
import Home from './components/Home/Home';
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
);
}

export default App;
