import { HintPerek, HintFather, HintMom, Dialog } from './styled'
import { observer } from 'mobx-react'
import { useStore } from 'store'

const Hint = observer(({ from, active }) => {
    const { timer, hints, game } = useStore()
    const perekDisabled = timer.seconds > 30 && game.trainingIsOver

    return (
        <>
            {from === 'perek' && (
                <HintPerek
                    className={perekDisabled ? `push` : null}
                    active={active}
                    disabled={perekDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!perekDisabled) {
                            hints.usePerekHint()
                        }
                    }}
                >
                    <Dialog
                        dangerouslySetInnerHTML={{
                            __html: `Ещё есть время. 
            Закажем недостающее?`,
                        }}
                        active={active}
                    />
                </HintPerek>
            )}
            {from === 'father' && (
                <HintFather
                    className={hints.dadDisabled ? `push` : null}
                    active={active}
                    disabled={hints.dadDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!hints.dadDisabled) {
                            hints.useDadHint()
                        }
                    }}
                >
                    <Dialog
                        dangerouslySetInnerHTML={{
                            __html: `Не нашёл? 
            Спрошу у соседа!`,
                        }}
                        active={active}
                    />
                </HintFather>
            )}
            {from === 'mom' && (
                <HintMom
                    className={hints.momDisabled ? `push` : null}
                    active={active}
                    disabled={hints.momDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!hints.momDisabled) {
                            hints.useMomHint()
                        }
                    }}
                >
                    <Dialog
                        dangerouslySetInnerHTML={{
                            __html: ` Где бросил, 
            там и лежит!`,
                        }}
                        active={active}
                    />
                </HintMom>
            )}
        </>
    )
})

export default Hint
