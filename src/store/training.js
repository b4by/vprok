import { makeAutoObservable } from "mobx"

export default class Training {
    trainingText = [
        `На картинке спрятаны предметы для дачного отдыха`,
        `Названия предметов написаны внизу`,
        `Найдите все предметы за 1 минуту 30 секунд`,
        `У вас есть подсказки:
         Мама всегда знает, где и что лежит`,
        `У вас есть подсказки:
         Папа сходит к соседям за нужным`,
        `У вас есть подсказки:
         Перекрёсток Впрок привезёт всё, что забыли взять 
         <span>активна, если до конца уровня <30 секунд</span>`,
        `Подсказки можно использовать один раз за уровень.
         В игре три уровня. Пройдите их все, чтобы получить суперприз — 
         скидку до 20% на заказ в приложении Перекрёсток Впрок.`
    ]
    currentIndexText = 0

    constructor(rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    increaseIndex() {
        this.currentIndexText += 1
    }

    getText() {
        return this.trainingText[this.currentIndexText]
    }
}