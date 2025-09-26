import Header from "./components/Header";
import { createSignal } from "solid-js";

const App = () => {
  console.log("App")
    const [counter, setCounter] = createSignal(0);

    setInterval(() => {
        setCounter(counter() + 1);
    }, 1000);

    return (
        <>
            <Header />
            <p id="counter">{counter()}</p>
            <div id="actions">
                <button onclick={() => setCounter(counter() - 1)}>-</button>
                <button onclick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
            </div>
        </>
    );
};

export default App;
