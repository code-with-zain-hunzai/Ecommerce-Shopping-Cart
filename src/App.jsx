import './App.css';
import Header from './shoppingcart/Header';
import Home from './shoppingcart/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './shoppingcart/Checkout';

function App() {
  return (
    < >
    
      <Router>
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
