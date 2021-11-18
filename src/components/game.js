import React, { useEffect, useState } from 'react';
import ScoreBoard from "./scoreboard"
import Cards from "./cards"


const Game = () => {
    const [items, setItems] = useState([]);

    const [cards, setCards] = useState([
        { number: "1" },
        { number: "2" },
        { number: "3" },
        { number: "4" },
        { number: "5" },
        { number: "6" },
        { number: "7" },
        { number: "8" },
        { number: "9" },
        { number: "10" },
    ])

    const shuffleCards = (newCards) => {
        newCards = newCards.sort(() => Math.random() - 0.5)
    }

    const addItem = (item) => {
        setItems(items => [...items, item])

        const newCards = [...cards];
        shuffleCards(newCards);
        setCards(newCards);
    }

    const resetGame = () => {
        setItems([]);
    }

    const checkItem = (item) => {
        if (items.includes(item)) {
            // includes a double
            resetGame()
        } else {
            // doesn't include a double
            addItem(item)
        }

    }

    useEffect(() => {
        // shuffles on component mount
        const newCards = [...cards];
        shuffleCards(newCards);
        setCards(newCards);
    }, []);


    return (
        <div>
            <h1>Memory Game</h1>
            <ScoreBoard score={items.length} />
            {cards.map((card, idx) => (
                <Cards number={card.number} checkItem={checkItem} key={idx} />
            ))}
        </div>
    );
}

export default Game