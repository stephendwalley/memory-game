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

    useEffect(() => {
        // shuffles on component mount
        const newCards = [...cards];
        shuffleCards(newCards);
        setCards(newCards);
        console.log(cards)
    }, []);

    const addItem = (item) => {
        setItems(items => [...items, item])

        const newCards = [...cards];
        shuffleCards(newCards);
        setCards(newCards);

        console.log(items)
    }

    return (
        <div>
            <h1>Memory Game</h1>
            <ScoreBoard score={items.length} />
            {cards.map((card, idx) => (
                <Cards number={card.number} addItem={addItem} key={idx} />
            ))}
        </div>
    );
}

export default Game