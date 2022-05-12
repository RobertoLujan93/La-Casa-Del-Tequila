import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetail';
import CartContextProvider from './Components/context/CartContext';
import AppContextProvider from './Components/context/AppContext';

function App() {
  return (
    <AppContextProvider>
    <CartContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer greetings = "Bievenido a La Casa del Tequila"/>}/>
        <Route path='/tequilas/:categoryId' element={ <ItemListContainer/> } />
        <Route path='/tequila/:tequilaId' element={ <ItemDetailContainer/> } />    
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;

