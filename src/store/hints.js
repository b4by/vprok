import { makeAutoObservable } from 'mobx'

export default class Hints {
    perekDisabled = false
    dadDisabled = false
    momDisabled = false
    momHintResult = ''

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }
    usePerekHint() {
        if (this.rootStore.game.trainingIsOver && !this.perekDisabled) {
             this.perekDisabled = true
            this.rootStore.game.pickAll()
        }
    }
    useDadHint() {
        if (this.rootStore.game.trainingIsOver && !this.dadDisabled) {
            this.dadDisabled = true
            this.rootStore.game.pickRandom()
        }
    }
    useMomHint() {
        if (this.rootStore.game.trainingIsOver && !this.momDisabled) {
            this.momDisabled = true
            const randomItem = this.rootStore.game.getRandom()
            this.momHintResult = randomItem
        }
    }
}
