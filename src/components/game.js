import ScoreBoard from "./scoreboard"
import Cards from "./cards"


const Game = () => {
    const cards = [
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
    ]


    return (
        <div>
            <h1>Memory Game</h1>
            <ScoreBoard score={12} highScore={24} />
            {cards.map((card, index) => (
                <Cards number={card.number} key={index} />
            ))}
        </div>
    );
}

export default Game