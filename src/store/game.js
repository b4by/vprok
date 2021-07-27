import { makeAutoObservable } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store'

const data = {
    0: ['Уголь', 'Решетка', 'Шампуры'],
    1: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица', 'арбуз'],
    2: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица'],
    3: ['paprika', 'tomato', 'cucumber', 'radish', 'chiken'],
}

export default class Game {
    level = 1
    totalLevels = 3
    trainingIsOver = true
    isStarted = false
    isCompleted = false
    index = -1
    levels = {
        0: ['Уголь', 'Решетка', 'Шампуры'],
        1: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица', 'арбуз'],
        2: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица'],
        3: ['paprika', 'tomato', 'cucumber', 'radish', 'chiken'],
    }
    pickedItems = []
    copyItems = {
        0: ['Уголь', 'Решетка', 'Шампуры'],
        1: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица', 'арбуз'],
        2: ['сладкий перец', 'помидор', 'огурец', 'редис', 'курица'],
        3: ['paprika', 'tomato', 'cucumber', 'radish', 'chiken'],
    }

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
        this.levels[this.level] = data[this.level]
    }

    get isOver() {
        return (
            this.rootStore.timer.seconds === 0 &&
            this.isStarted &&
            this.trainingIsOver
        )
    }

    get items() {
        return this.levels[this.level]
    }

    get currentLevel() {
        return this.level
    }

    get currentItems() {
        return this.levels[this.level].filter((_, index) => index <= 2)
    }

    setTrainingIsOver() {
        this.level = 1
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
            const index = this.levels[this.level].indexOf(item)
            const newItem = this.levels[this.level][3]
            this.index = index

            if (~index && newItem && index < 3) {
                this.copyItems[this.level].splice(3, 1)
                this.copyItems[this.level].splice(index, 1, newItem)
            }

            if (~index && !newItem) {
                this.copyItems[this.level].splice(index, 1)
            }

            setTimeout(() => {
                if (~index && newItem && index < 3) {
                    this.levels[this.level].splice(3, 1)
                    this.levels[this.level].splice(index, 1, newItem)
                }

                if (~index && !newItem) {
                    this.levels[this.level].splice(index, 1)
                }

                if (this.levels[this.level].length === 0) {
                    this.isCompleted = true
                }
            }, 1000)
        }
    }

    pickAll() {
        if (this.trainingIsOver) {
            this.levels[this.level] = []

            setTimeout(() => {
                this.completed()
            }, 2000)
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
        return this.copyItems[this.level]
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
