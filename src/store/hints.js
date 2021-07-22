import { makeAutoObservable } from "mobx"
import { makePersistable } from 'mobx-persist-store';

export default class Hints {
    perekDisabled = false
    dadDisabled = false
    momDisabled = false

    constructor(rootStore) {
        makeAutoObservable(this)
        // TODO: удалить перед релизом
        makePersistable(this, {
            name: 'Hints',
            properties: ['perek', 'dad', 'mom'],
            storage: window.localStorage,
        })
        this.rootStore = rootStore
    }
    usePerekHint() {
        this.perekDisabled = true
        this.rootStore.game.pickAll()
    }
    useDadHint() {
        this.dadDisabled = true
        this.rootStore.game.pickRandom()
    }
    useMomHint() {
        this.momDisabled = true
        return this.rootStore.game.getRandom()
    }
}
