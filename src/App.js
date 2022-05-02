import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetail';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer greetings = "Bievenido a La Casa del Tequila"/>}/>
        <Route path='/tequilas/:categoryId' element={ <ItemListContainer/> } />
        <Route path='/tequila/:tequilaId' element={ <ItemDetailContainer/> } />    
      </Routes>
      </BrowserRouter>
  );
}

export default App;

