import { useState } from "react";
import Die from "./Die";

function App() {
    const [dice, setDice] = useState(generateAllNewDice());

    function generateAllNewDice() {
        return new Array(9).fill({}).map(() => {
            return { value: Math.ceil(Math.random() * 6), isHeld: false }
        });
    }

    const diceElements = dice.map((element, index) => {
        return <Die key={index} value={element.value} />
    })


    return (
        <main className="main-area">
            <div className="top-text">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="dice">
                {diceElements}
            </div>
            <button onClick={() => setDice(generateAllNewDice())} className="roll">Roll</button>
        </main>

    )
}

export default App;
