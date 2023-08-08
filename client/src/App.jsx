import { Route, Routes } from "react-router-dom";
import Home from "./ViewsComponentes/Home/Home";
import LandingPage from "./ViewsComponentes/LandingPage/LandingPage";
import Detail from "./ViewsComponentes/Detail/Detail";
import Form from "./ViewsComponentes/Create-Form/Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
