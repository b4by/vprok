import { makeAutoObservable } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store'

export default class Game {
    level = 1
    totalLevels = 3
    trainingIsOver = false
    isStarted = false
    isCompleted = false
    levels = {
        0: ['Уголь', 'Решетка', 'Шампуры'],
        1: ['Редис', 'Мясо', 'Помидор'],
        2: ['Уголь', 'Решетка', 'Арбуз'],
        3: ['Уголь', 'Решетка', 'Мяч'],
    }
    pickedItems = []
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Game',
            properties: [
                'level',
                'trainingIsOver',
                'isStarted',
                'isCompleted',
                'levels',
                'pickedItems',
            ],
            storage: window.localStorage,
        })
        this.rootStore = rootStore
    }

    levelPassed() {
        this.level += 1
        this.levelRestart()
    }

    levelRestart() {
        this.rootStore.hints.perekDisabled = false
        this.rootStore.hints.dadDisabled = false
        this.rootStore.hints.momDisabled = false
        this.isStarted = false
        this.isCompleted = false
        this.rootStore.timer.restart()
        this.pickedItems = []
        this.rootStore.hints.momHintResult = ''
    }

    get isOver() {
        return (
            this.rootStore.timer.seconds === 0 &&
            this.isStarted &&
            this.trainingIsOver
        )
    }

    get currentLevel() {
        return this.level
    }

    setTrainingIsOver() {
        this.trainingIsOver = true
    }

    completed() {
        this.rootStore.timer.isStarted = false
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
            if (this.pickedItems.length === 3) this.completed()
        }
    }

    pickAll() {
        if (this.trainingIsOver) {
            this.levels[this.level].map((item) => {
                return this.pickedItems.push(item)
            })

            this.completed()
        }
    }

    getFiltered() {
        return this.levels[this.level].filter(
            (item) => !this.pickedItems.includes(item)
        )
    }

    getRandom() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }

        const filtered = this.getFiltered()
        const random = getRandomInt(filtered.length - 1)

        return filtered[random]
    }

    pickRandom() {
        this.pickedItems.push(this.getRandom())
    }
}
