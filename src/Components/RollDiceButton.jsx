export default function RollDiceButton(props) {
    return (
        <button 
            className="btn"
            onClick={props.rollDice}
        >
            {props.tenzies ? "New Game" : "Roll"}
        </button>
    )
}