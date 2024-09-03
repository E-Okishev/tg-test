import "./App.css";
import { Block } from "./components/block/Block";
import { Counter } from "./components/counter/Counter";
import { Timer } from "./components/timer/Timer";
import { Header } from "./components/Header/Header";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";

function App() {
  return (
    <>
      <Header />
      <main>
        <FirstBlock/>

        <section className="section">
          <div className="block_group">
            <Block
              title="Каталог"
              description="Большой выбор техники для дома и вас"
              color="pink"
            />
            <Block
              title="Акции"
              description="Скидки, рассрочки, выгодные комплекты"
              color="lightgreen"
            />
            <Block
              title="Собрать ПК"
              description="Без проблем c совместимостью"
              color="skyblue"
            />
          </div>
        </section>
        <Counter />
      </main>
    </>
  );
}

export default App;
