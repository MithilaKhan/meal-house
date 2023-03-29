
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';
function App() {

  
  return (
    <div className="App">
    <Header></Header>
   <Meals></Meals>
    </div>
  );
}

export default App;
