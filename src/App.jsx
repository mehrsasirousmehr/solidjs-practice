import Header from "./components/Header";
import { createEffect, createSignal } from "solid-js";

const App = () => {
  console.log("App")
    const [counter, setCounter] = createSignal(0);
    const dobleCounter = () => counter() * 2;

    // createEffect(() => {
    //     console.log("effect", counter())
    // })

    // setInterval(() => {
    //     setCounter(counter() + 1);
    // }, 1000);

    return (
        <>
            <Header />
            {/* <p id="counter">{counter()}</p> */}
            <p id="counter">{dobleCounter()}</p>
            <div id="actions">
                <button onclick={() => setCounter(counter() - 1)}>-</button>
                <button onclick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
            </div>
        </>
    );
};

export default App;
