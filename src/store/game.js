import { makeAutoObservable } from 'mobx'

const data = {
    0: ['Уголь', 'Решётка', 'Шампуры'],
    1: [
        'мясо',
        'сладкий перец',
        'помидор',
        'пучок зелени',
        'огурец',
        'кетчуп',
        'сок',
        'редис',
        'курица',
        'колбаски',
        'дыня',
        'арбуз',
    ],
    2: [
        'мясо',
        'сладкий перец',
        'редис',
        'курица',
        'пучок зелени',
        'кетчуп',
        'сок',
        'дыня',
        'арбуз',
        'шампуры',
        'мангал',
        'колбаски',
        'огурец',
        'решётка',
        'пластиковые стаканчики',
        'уголь',
        'помидор',
    ],
    3: [
        'редис',
        'курица',
        'мясо',
        'сладкий перец',
        'помидор',
        'пучок зелени',
        'огурец',
        'кетчуп',
        'сок',
        'дыня',
        'арбуз',
        'шампуры',
        'лейка',
        'мангал',
        'колбаски',
        'мяч',
        'решётка',
        'пластиковые стаканчики',
        'бутилированная вода',
        'уголь',
        'детское ведёрко',
        'грабли',
    ],
}

export default class Game {
    level = 0
    trainingIsOver = false
    isStarted = false
    isCompleted = false
    levels = { ...data }
    copyItems = { ...data }
    rootStore = null
    musicIsMuted = false

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    levelPassed() {
        this.level += 1
        this.levelRestart()
    }

    toggleMusic() {
        this.musicIsMuted = !this.musicIsMuted
    }

    levelRestart() {
        this.rootStore.hints.perekDisabled = false
        this.rootStore.hints.dadDisabled = false
        this.rootStore.hints.momDisabled = false
        this.isStarted = false
        this.isCompleted = false
        this.rootStore.timer.restart()
        this.rootStore.hints.momHintResult = ''
        this.levels[this.level] = data[this.level]
        this.copyItems[this.level] = data[this.level]
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
        this.rootStore.timer.isFinish = true
        this.isCompleted = true
    }

    start() {
        this.isStarted = true
    }

    pick(item) {
        if (this.trainingIsOver) {
            const index = this.levels[this.level].indexOf(item)
            const newItem = this.levels[this.level][3]

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
            }, 500)
        }
    }

    pickAll() {
        if (this.trainingIsOver) {
            this.copyItems[this.level] = []

            setTimeout(() => {
                this.completed()
            }, 2000)
        }
    }

    getFiltered() {
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
