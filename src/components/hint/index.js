import { HintPerek, HintFather, HintMom, Dialog } from './styled'
import { observer } from 'mobx-react'
import { useStore } from 'store'
import { useState } from 'react'

const Hint = observer(({ from, active, disabled }) => {
    const { timer, hints, game } = useStore()
    const perekDisabled = timer.seconds > 30 && game.trainingIsOver

    const [push, setPush] = useState(false)

    const animate = () => {
        // Button begins to shake
        setPush(true)

        // Buttons tops to shake after 2 seconds
    }

    return (
        <>
            {from === 'perek' && (
                <HintPerek
                    className={push ? `push` : null}
                    active={active}
                    disabled={perekDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!perekDisabled) {
                            animate()
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
                    className={push ? `push` : null}
                    active={active}
                    disabled={hints.dadDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!hints.dadDisabled) {
                            animate()
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
                    className={push ? `push` : null}
                    active={active}
                    disabled={hints.momDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!hints.momDisabled) {
                            animate()
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
