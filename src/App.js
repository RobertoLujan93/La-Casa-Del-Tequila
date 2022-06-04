import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from "./Components/Cart";
import CartContextProvider from './Components/context/CartContext';
import AppContextProvider from './Components/context/AppContext';
import Checkout from './Components/Checkout';

function App() {
  return (
    <AppContextProvider>
    <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/tequilas/:categoryId' element={ <ItemListContainer/> } />
        <Route path='/tequila/:tequilaId' element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={<Cart/>} />   
        <Route path="/checkout" element={<Checkout/>} />   
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;

