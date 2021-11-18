import React, { useState, useEffect } from 'react';

const ScoreBoard = (props) => {
    const [hScore, setHScore] = useState(0)

    useEffect(() => {
        if (props.score > hScore) {
            setHScore(props.score)
        }
    }, [props.score, hScore])

    return (
        <div>
            <div>
                <p>Score:</p>
                <p>{props.score}</p>
            </div>
            <div>
                <p>High Score:</p>
                <p>{hScore}</p>
            </div>
        </div>
    )
}

export default ScoreBoard