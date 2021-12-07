import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
    <header>
        <img src={logo} className="profile-img" alt="profile-img" />
        <p>Nome e Cognome</p>
    </header>
    <div className="content">
      <div className="column">
        <h3>Titolo 1</h3>
        <p>Porca Putténa! Certo che tu metti un'allegria: zio Lino di che sesso sono le tartarughe nun me rompe li cojoni! Dovrei avere il premio per il self control dopo diciott'anni che ti sopporto è un libro sugli uccelli, gli attivi i passivi e i riflessivi.</p>
      </div>
      <div className="column">
        <h3>Titolo 2</h3>
        <p>Porca Putténa! Certo che tu metti un'allegria: zio Lino di che sesso sono le tartarughe nun me rompe li cojoni! Dovrei avere il premio per il self control dopo diciott'anni che ti sopporto è un libro sugli uccelli, gli attivi i passivi e i riflessivi.</p>
      </div>
      <div className="column">
        <h3>Titolo 3</h3>
        <p>Porca Putténa! Certo che tu metti un'allegria: zio Lino di che sesso sono le tartarughe nun me rompe li cojoni! Dovrei avere il premio per il self control dopo diciott'anni che ti sopporto è un libro sugli uccelli, gli attivi i passivi e i riflessivi.</p>
      </div>
    </div>
    <footer>
      <p>Footer text</p>
    </footer>
</main>
  );
}

export default App;
