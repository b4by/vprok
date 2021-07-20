import { makeAutoObservable } from "mobx"
import { makePersistable, isHydrated } from 'mobx-persist-store';

export default class Hints {
    

    constructor(rootStore) {
        makeAutoObservable(this)
        // TODO: удалить перед релизом
        // makePersistable(this, { name: 'Game', properties: ['level', 'trainingIsOver', 'isStarted', 'isCompleted'], storage: window.localStorage });
        this.rootStore = rootStore
    }
    
}
