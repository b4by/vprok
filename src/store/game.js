import { makeAutoObservable } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store'

export default class Game {
    level = 1
    totalLevels = 3
    trainingIsOver = false
    isStarted = false
    isCompleted = false
    rootStore
    levels = {
        0: ['Уголь', 'Решетка', 'Шампуры'],
        1: ['Редис', 'Мясо', 'Помидор'],
        2: ['Редис', 'Мясо', 'Помидор'],
        3: ['Редис', 'Мясо', 'Помидор'],
    }
    pickedItems = []

    constructor(rootStore) {
        makeAutoObservable(this)
        // TODO: удалить перед релизом
        // makePersistable(this, { name: 'Game', properties: ['level', 'trainingIsOver', 'isStarted', 'isCompleted'], storage: window.localStorage });
        this.rootStore = rootStore
    }

    levelPassed() {
        this.level += 1
    }

    get isOver() {
        return (
            this.rootStore.timer.seconds === 0 &&
            this.isStarted &&
            this.trainingIsOver
        )
    }

    setTrainingIsOver() {
        this.trainingIsOver = true
    }

    completed() {
        this.isCompleted = true
    }

    start() {
        this.isStarted = true
    }

    get isHydrated() {
        return isHydrated(this)
    }

    pick(item) {
        if (this.trainingIsOver) {
            const pickedItem = this.levels[this.level].find(
                (elem) => elem === item
            )

            if (pickedItem) this.pickedItems.push(pickedItem)
        }
    }
}
