import "antd/dist/reset.css";
import Header from "./component/header/header";
import Home from "./component/content/home/home";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/detail/detail";
import "./App.css";
import Slider from './component/slider/slider'
import Search from "./layout/search";
import Theme from "./layout/Theme";
import Step1 from './SignIn/step1/step1'
import Step2 from './SignIn/step2/step2'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<Theme/>} />
        <Route path="/result" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/slider" element={<Slider/>} />
        <Route path="/accounts" element={<Step1/>} />
        <Route path="/accounts/password" element={<Step2/>} />
      </Routes>
    
      
    </div>
  );
}

export default App;
