import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
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
            </main>
        </div>
    );
}

export default App;
