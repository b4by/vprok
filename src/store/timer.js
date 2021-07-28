import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export default class Timer {
    timePassed = 0
    isFinish = false
    isStarted = false
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Timer',
            properties: ['timePassed', 'isFinish', 'isStarted'],
            storage: window.localStorage,
        })
        this.rootStore = rootStore
    }

    increaseTimer() {
        if (!this.isFinish) this.timePassed += 1
    }

    get seconds() {
        return Math.max(0, 10 - this.timePassed)
    }

    start() {
        this.isStarted = true
    }

    restart() {
        this.timePassed = 0
        this.isFinish = false
        this.isStarted = false
    }
}
