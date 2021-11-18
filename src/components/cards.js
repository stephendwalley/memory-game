const Cards = (props) => {
    return (
        <div>
            <h2 onClick={() => { props.checkItem(props.number) }} name={props.number}>{props.number}</h2>
        </div>
    )
}

export default Cards