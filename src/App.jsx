import "./App.css";

function App() {
  return (
    <div>
      <header className="bg-sky-950 py-3">
        <h1 className="font-bold text-2xl  text-white">
          Aplicativo de Cálculo das Taxas de Alvará e Habite-se
        </h1>
        <h2 className="text-white">
          Elaborado por: Eng. Civil Thálysson Queiroz Brandão
        </h2>
      </header>

      <form className="py-10 flex gap-6 justify-center ">
        <div className="p-6 border-2 bg-sky-50">
          <div className="flex flex-col">
            <label>Metragem quadrada:</label>
            <input type="number" className="border-2 text-center" />
          </div>
          <div className="flex flex-col">
            <label>UVFM (R$):</label>
            <input type="number" className="border-2 text-center" />
          </div>
          <div className="flex flex-col">
            <label>Nº de pavimentos:</label>
            <input type="number" className="border-2 text-center" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
