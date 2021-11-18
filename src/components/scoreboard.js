const ScoreBoard = (props) => {
    return (
        <div>
            <div>
                <p>Score:</p>
                <p>{props.score}</p>
            </div>
            <div>
                <p>High Score:</p>
                <p>{props.highScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard