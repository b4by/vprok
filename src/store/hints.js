import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export default class Hints {
    perekDisabled = false
    dadDisabled = false
    momDisabled = false
    momHintResult = ''

    constructor(rootStore) {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Hints',
            properties: [
                'perekDisabled',
                'dadDisabled',
                'momDisabled',
                'momHintResult',
            ],
            storage: window.localStorage,
        })
        this.rootStore = rootStore
    }
    usePerekHint() {
        if (this.rootStore.game.trainingIsOver && !this.perekDisabled) {
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
