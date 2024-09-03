import "./App.css";
import { Header } from "./components/Header/Header";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { True } from "./components/True/True";

function App() {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <True />
      </main>
    </>
  );
}

export default App;
