import { useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/home'
import Game from './pages/game'

function App() {
 const audioRef = useRef(null);

 return (
   <>
    <audio src="audio/intro.mp3" ref={audioRef} controls autoPlay allow="autoplay" loop style={{ display: 'none'}}></audio>
    <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home audioRef={audioRef} />
          </Route>
        </Switch>
    </Router>
    </>
 );
}

export default App;
