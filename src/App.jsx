import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartItem from "./pages/Cart";

const App = () => {
  return (
    <div>
    <div className="bg-slate-900">
       <Navbar/>
    </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartItem/>}/>
      </Routes>
    </div>
  );
};

export default App;