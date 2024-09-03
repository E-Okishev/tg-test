import "./App.css";
import { Header } from "./components/Header/Header";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { True } from "./components/True/True";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <True />
        <Form/>
      </main>
    </>
  );
}

export default App;
