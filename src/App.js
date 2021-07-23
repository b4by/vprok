import { useRef, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StoreProvider } from './store'
import Home from './pages/home'
import Game from './pages/game'

function App() {
    //  const audioRef = useRef(null);

    //   useEffect(() => {
    //       audioRef.current.play();
    //   }, []);

    return (
        <StoreProvider>
            {/* <audio src="audio/intro.mp3" ref={audioRef} controls autoPlay allow="autoplay" loop style={{ display: 'none'}}></audio> */}
            <Router>
                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </StoreProvider>
    )
}

export default App
