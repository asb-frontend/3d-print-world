import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { getMockProductData } from './utils/mock/productManager'; // Adjust the path as necessary

function App() {
  const mockProductData = getMockProductData();
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
