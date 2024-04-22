import { useState, useRef } from 'react'

const Player = () => {
    const playerName = useRef<HTMLInputElement>(null)
    const [enteredPlayerName, setEnteredPlayerName] = useState<any>(null)

    const handleClick = () => {
        setEnteredPlayerName(playerName.current?.value)

        if (playerName.current) {
            playerName.current.value = ''
        }
    }

    return (
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>

            <p>
                <input type="text" ref={playerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    )
}

export default Player
