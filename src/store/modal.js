import { makeAutoObservable } from 'mobx'

export default class Modal {
    modal = {
        show: false,
        body: null,
    }

    constructor() {
        makeAutoObservable(this)
    }

    get isOpen() {
        return this.modal.show
    }

    get body() {
        return this.modal.body
    }

    showModal(body) {
        this.modal.show = true
        this.modal.body = body
    }

    closeModal() {
        this.modal.show = false
        this.modal.body = null
    }
}
