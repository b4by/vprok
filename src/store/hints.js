import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export default class Hints {
    perekDisabled = false
    dadDisabled = false
    momDisabled = false

    constructor(rootStore) {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Hints',
            properties: ['perekDisabled', 'dadDisabled', 'momDisabled'],
            storage: window.localStorage,
        })
        this.rootStore = rootStore
    }
    usePerekHint() {
        if (this.rootStore.game.isStarted) {
            this.perekDisabled = true
            this.rootStore.game.pickAll()
        }
    }
    useDadHint() {
        if (this.rootStore.game.isStarted) {
            this.dadDisabled = true
            this.rootStore.game.pickRandom()
        }
    }
    useMomHint() {
        if (this.rootStore.game.isStarted) {
            this.momDisabled = true
            return this.rootStore.game.getRandom()
        }
    }
}
