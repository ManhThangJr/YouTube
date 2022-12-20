import "antd/dist/reset.css";
import Header from "./component/header/header";
import Home from "./component/content/home/home";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/detail/detail";
import "./App.css";
import Slider from './component/slider/slider'
import Search from "./layout/search";
import Theme from "./layout/Theme";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/categories/:id" element={<Theme />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/slider" element={<Slider/>} />
      </Routes>
    
      
    </div>
  );
}

export default App;
