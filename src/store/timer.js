import { makeAutoObservable } from 'mobx'
export default class Timer {
    timePassed = 0
    isFinish = false
    isStarted = false
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    increaseTimer() {
        if (!this.isFinish) this.timePassed += 1
    }

    get seconds() {
        return Math.max(0, 90 - this.timePassed)
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
