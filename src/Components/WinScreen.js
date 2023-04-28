export default function WinScreen() {
    return (
        <main>
            <h2>You Win!</h2>
            <button onClick={() => {
                window.location.reload()
            }}>Play again?</button>
        </main>
    )
}