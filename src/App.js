import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { FirstBlock } from "./components/FirstBlock/FirstBlock";
import { True } from "./components/True/True";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/Nav/Nav";
import { WhatIs } from "./components/WhatIs/WhatIs";

const sections = [
  {
    id: "section1",
    title: "О\u00A0Битрикс24",
    label: <FirstBlock />,
    showInMenu: false,
  },
  {
    id: "section2",
    title: "Как\u00A0мы\u00A0работаем",
    label: <True />,
    showInMenu: true,
  },
  { id: "section3", title: "Тарифы", label: <Form />, showInMenu: true },
  { id: "section4", title: "Компетенции", label: <WhatIs />, showInMenu: true },
  { id: "section5", title: "Кейсы", label: <FirstBlock />, showInMenu: true },
  {
    id: "section6",
    title: "О\u00A0нас",
    label: <FirstBlock />,
    showInMenu: true,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <>
      <Header />
      <Nav
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.label}
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
