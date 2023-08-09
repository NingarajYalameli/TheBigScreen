import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import {Header, Footer} from './components'; 

console.log('this is the entry point for all components');

function App() {
  return (
    <div className="App">
<Header />
     <AllRoutes/>
<Footer />
    </div>
  );
}


export default App;
