import { createContext, useContext } from "react"
import Training from './training'
import Game from './game'
import Timer from './timer'
import Hints from './hints'

class RootStore {
    constructor() {
        this.game = new Game(this)
        this.timer = new Timer(this)
        this.training = new Training(this)
        this.hints = new Hints(this)
    }
}

const storeContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const store = new RootStore()
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
