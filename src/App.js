import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings = "Bievenido a La Casa del Tequila"/>
    </div>
  );
}

export default App;
