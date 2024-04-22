import Player from './components/Player/Player'
import Challenge from './components/Timer/Challenge'

const App = () => {
    return (
        <>
            <Player />
            <div id="challenges">
                <Challenge title="Easy" targetTime={1} />
                <Challenge title="Not Easy" targetTime={5} />
                <Challenge title="Getting Tough" targetTime={10} />
                <Challenge title="Pros Only" targetTime={15} />
            </div>
        </>
    )
}

export default App
