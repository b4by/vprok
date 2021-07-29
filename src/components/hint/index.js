import { HintPerek, HintFather, HintMom, Dialog } from './styled'
import { observer } from 'mobx-react'
import { useStore } from 'store'
import { useState } from 'react'
import Sound from 'components/sound'

const Hint = observer(({ from, active }) => {
    const { timer, hints, game } = useStore()
    const [hover, setHover] = useState(false)
    const perekDisabled =
        timer.seconds > 30 && game.trainingIsOver

    return (
        <>
            {hover && <Sound type="bubble" />}
            {hints.perekDisabled && <Sound type="bigpick" />}
            {hints.momDisabled && <Sound type="pong" />}
            {hints.dadDisabled && <Sound type="pickup" />}

            {from === 'perek' && (
                <HintPerek
                    className={hints.perekDisabled ? `push` : null}
                    active={active}
                    disabled={perekDisabled}
                    trainingIsOver={game.trainingIsOver}
                    onClick={() => {
                        if (!perekDisabled) {
                            hints.usePerekHint()
                        }
                    }}
                    onMouseOver={() => {
                        setHover(true)
                        setTimeout(() => {
                            setHover(false)
                        }, 1000)
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
                    onMouseOver={() => {
                        setHover(true)
                        setTimeout(() => {
                            setHover(false)
                        }, 1000)
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
                    onMouseOver={() => {
                        setHover(true)
                        setTimeout(() => {
                            setHover(false)
                        }, 1000)
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
