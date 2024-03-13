import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import "./App.css";
import { CartWidget } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";


function App() {
  
  return (
   <>
   <NavBar/>
   <ItemListContainer greeting = "Bienvenidos!" /> 
   </> 
  );
}

export default App;
