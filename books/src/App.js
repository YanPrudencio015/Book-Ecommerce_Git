import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar} from './components/navbar'
import ShopBooksPage from './Pages/shopPage';
import CartPage from './Pages/cartPage'

import { CardContextprovider } from './context/cartContext';



function App(props) {

  return (
    <div className="App">
      <CardContextprovider>
        <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ShopBooksPage/>}/>
              <Route path='/cart' element={<CartPage />}/>  
              
            </Routes>
        </Router>
      </CardContextprovider>
    </div>
  );
}

export default App;
