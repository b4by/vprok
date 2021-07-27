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
        1: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица', 'арбуз'],
        2: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица'],
        3: ['paprika', 'tomato', 'cucumber', 'radish', 'chiken'],
    }
    pickedItems = []
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
        // makePersistable(this, {
        //     name: 'Game',
        //     properties: [
        //         'level',
        //         'trainingIsOver',
        //         'isStarted',
        //         'isCompleted',
        //         'levels',
        //         'pickedItems',
        //     ],
        //     storage: window.localStorage,
        // })
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

    get currentItems() {
        return this.getFiltered().filter((_, index) => index <= 2)
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
            // const pickedItem = this.levels[this.level].find(
            //     (elem) => elem === item
            // )

            const index = this.levels[this.level].indexOf(item)
            const newItem = this.levels[this.level][3]

            if (~index && newItem && index < 3) {
                this.levels[this.level].splice(3, 1)
                this.levels[this.level].splice(index, 1, newItem)
            }

            if (~index && !newItem) {
                this.levels[this.level].splice(index, 1)
            }

            if(this.levels[this.level].length === 0) {
                this.isCompleted = true
            }
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
        // const copyItems = [...this.levels[this.level]]
        // this.pickedItems.forEach((pickedItem) => {
        //     const index = this.levels[this.level].indexOf(pickedItem)
        //     if (~index) {
        //         copyItems.splice(index, 1, pickedItem)
        //     }
        // })
        return this.levels[this.level]
    }

    getRandom() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }

        const filtered = this.currentItems
        const random = getRandomInt(Math.min(this.levels[this.level].length, 3))

        return filtered[random]
    }

    pickRandom() {
        this.pick(this.getRandom())
    }
}
