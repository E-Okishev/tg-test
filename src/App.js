import "./App.css";
import { Block } from "./components/block/Block";
import { Counter } from "./components/counter/Counter";
import { Timer } from "./components/timer/Timer";

function App() {
  return (
    <>
      <section className="section">
        <Timer />
      </section>
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
    </>
  );
}

export default App;
