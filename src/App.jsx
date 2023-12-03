import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from "./data";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {

    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function CoreConcept({title, description, image}) {
    return <li>
        <img src={image} alt={description}/>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept title="Components" description="The core UI building block." img={componentsImg}/>
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;