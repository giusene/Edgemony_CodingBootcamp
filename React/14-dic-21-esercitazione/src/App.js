import AddVAT from './components/AddVAT'

function App() {

  // valori  per iva
  const value = 100;
  const vat = 22;

  return (
    <div>
      <AddVAT value={value} vat={vat} />
      <p>prova</p>
      <p>prova 2</p>
    </div>
  );
}

export default App;
