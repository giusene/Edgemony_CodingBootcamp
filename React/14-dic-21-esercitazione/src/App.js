import AddVAT from './components/AddVAT'

function App() {

  // valori  per iva
  const value = 100;
  const vat = 22;

  return (
    <div>
      <AddVAT value={value} vat={vat} />
      <p>prova</p>
    </div>
  );
}

export default App;
