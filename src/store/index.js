import { makeAutoObservable } from "mobx"
import { makePersistable, isHydrated } from 'mobx-persist-store';
import { createContext, useContext } from "react"

const LEVEL_DURATION = 30;

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    getTodos(user) {
        // Access todoStore through the root store.
        return this.rootStore.todoStore.todos.filter(todo => todo.author === user)
    }
}

class Game {
    level = 3
    totalLevels = 3
    trainingIsOver = false
    isStarted = false
    isCompleted = false
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        // makePersistable(this, { name: 'Game', properties: ['level', 'trainingIsOver', 'isStarted', 'isCompleted'], storage: window.localStorage });
        this.rootStore = rootStore
    }

    levelPassed() {
        this.level += 1
    };

    get isOver() {
        return  this.rootStore.timer.seconds === 0 && this.isStarted && this.trainingIsOver
    }

    setTrainingIsOver() {
        this.trainingIsOver = true
    }

    completed() {
        this.isCompleted = true
    }

    start() {
        this.trainingIsOver = true
        this.isStarted = true
    }

    get isHydrated() {
        return isHydrated(this);
    }
    
}

class Timer {
    timePassed = 0
    isFinish = false
    isStarted = false
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        // makePersistable(this, { name: 'Timer', properties: ['timePassed', 'isFinish', 'isStarted'], storage: window.localStorage });
        this.rootStore = rootStore
    }

    increaseTimer() {
        this.timePassed += 1
    }

    get seconds() {
        return  Math.max(0, LEVEL_DURATION + (90 - (this.rootStore.game.level * LEVEL_DURATION)) - this.timePassed)
    }

    start() {
        this.isStarted = true
    }
}
class RootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.game = new Game(this)
        this.timer = new Timer(this)
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
