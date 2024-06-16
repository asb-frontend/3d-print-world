import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Product product={'A_A1'} name={"A_A1 Model"} onAddToCart={() => {
        console.log("Producted was added")
      }}/>
    </div>
  );
}

export default App;
