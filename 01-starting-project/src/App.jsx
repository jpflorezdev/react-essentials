import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function clickHandler() {
    console.log("HELLO JP :)");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={clickHandler}>Components</TabButton>
            <TabButton onClick={clickHandler}>JSX</TabButton>
            <TabButton onClick={clickHandler}>Props</TabButton>
            <TabButton onClick={clickHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
