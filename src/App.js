import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext/CartContext';
import CartForm from './components/CartForm/CartForm';
function App() {
  return ( 
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/category/:categoryName' element={<ItemListContainer />}/>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/about' element={<CartForm/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
