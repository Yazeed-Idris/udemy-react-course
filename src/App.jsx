import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {

    function handleSelect() {
        console.log('selected');
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                    </ul>
                </section>
                <section id={'examples'}>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleSelect}>Components</TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>
                    </menu>

                </section>
            </main>
        </div>
    );
}

export default App;
