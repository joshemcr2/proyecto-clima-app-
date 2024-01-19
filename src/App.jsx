import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <>
      <ClimaProvider>
        <header>
          <h1>Buscador De Clima</h1>
        </header>
        <AppClima />
        <footer>
          <p>Hecho Por Jose A Munoz Cardozo - 2024</p>
        </footer>
      </ClimaProvider>
    </>
  );
}

export default App;
