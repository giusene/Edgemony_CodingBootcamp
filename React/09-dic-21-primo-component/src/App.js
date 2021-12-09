import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card 
          imgBg = "https://siviaggia.it/wp-content/uploads/sites/2/2020/04/vette-italia.jpg"
          imgSrc= "https://www.ducatiurbanemobility.it/wp-content/uploads/2020/11/zaino.png" 
          productTitle= "Backpack" 
          productPrice= "34" 
          productDescription= "Whit a concept design to be easy to understand, RAINS bridge the gap between geopraphy and lifestyle." 
          ColorTitle= "Colors" 
          SizeTitle= "Size" 
          ButtonName= "Add to cart" 
        />
      </header>
    </div>
  );
}

export default App;
