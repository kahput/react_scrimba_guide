import { useEffect, useRef, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function Main() {
    const [dice, setDice] = useState(() => rollDice(null));


    let newGameButton = useRef(null);

    const gameWon = dice.every(element => element.isHeld
        && dice.every(die => die.value === dice[0].value));

    useEffect(() => {
        newGameButton.current.focus();
    }, [gameWon])

    function rollDice(prevState) {
        let arr = prevState !== null
            ? prevState
            : new Array(9).fill({}).map(() => {
                return { id: nanoid(), isHeld: false }
            })


        return arr.map((element) => {
            return element.isHeld === true
                ? element
                : { ...element, value: Math.ceil(Math.random() * 6) };
        });
    }

    function hold(id) {
        setDice((prevState) => {
            return prevState.map((element) => {
                return element.id === id
                    ? { ...element, isHeld: !element.isHeld }
                    : element
            });
        })
    }

    const diceElements = dice.map((element) => {
        return <Die key={element.id} value={element.value} isHeld={element.isHeld} hold={() => hold(element.id)} />
    })


    return (
        <main className="main-area">
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>{"Congratulations! You won! Press \"New Game\" to start again"}</p>}

            </div>
            <div className="top-text">
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="dice">
                {diceElements}
            </div>
            <button ref={newGameButton} onClick={() => setDice((prevState) => !gameWon ? rollDice(prevState) : rollDice(null))} className="roll">
                {gameWon ? "New game" : "Roll"}
            </button>
        </main>

    )
}

export default Main;
