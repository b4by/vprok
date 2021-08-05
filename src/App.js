import { useRef, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { StoreProvider } from './store'
import Home from './pages/home'
import Game from './pages/game'
import { Location } from 'components/location'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/index'
import ModalContainer from 'components/modal/index'

const App = observer(() => {
    const { modal } = useStore()

    return (
        <>
            <Router>
                <Location>
                    <Switch>
                        <Route path="/level/:id">
                            <Game />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Location>
                {modal.body && modal.body}
            </Router>
        </>
    )
})

export default App
