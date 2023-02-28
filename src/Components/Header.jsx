export default function Header(props) {
    return (
        <>
            <h1 className="header">Tenzies</h1>
            <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="stats">
                <p>Lowest Numbers of rolls: {props.lowerNumberOfRolls}</p>
                <p className="rolls">No. of Rolls: {props.numOfRolls}</p>
            </div>
        </>
    )
}