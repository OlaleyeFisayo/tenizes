
export default function Timer({minutes, seconds}) {
    return (
    <>
        <p>Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    </>
    );
}