import { HintPerek, HintFather, HintMom, Dialog } from './styled'
import { useStore } from 'store'

export default function Hint({ from, active, disabled }) {
    const { timer, hints, game } = useStore()
    console.log('dtimer.seconds', timer.seconds, timer.seconds > 30)
    const perekDisabled =
        (timer.seconds > 30 || hints.perekDisabled) && game.trainingIsOver

    return (
        <>
            {from === 'perek' && (
                <HintPerek active={active} disabled={perekDisabled} onClick={() => { hints.usePerekHint() }}>
                    {active && (
                        <Dialog
                            dangerouslySetInnerHTML={{
                                __html: `Ещё есть время. 
            Закажем недостающее?`,
                            }}
                        />
                    )}
                </HintPerek>
            )}
            {from === 'father' && (
                <HintFather active={active} disabled={hints.dadDisabled} onClick={() => { hints.useDadHint() }}>
                    {active && (
                        <Dialog
                            dangerouslySetInnerHTML={{
                                __html: `Не нашёл? 
            Спрошу у соседа!`,
                            }}
                        />
                    )}
                </HintFather>
            )}
            {from === 'mom' && (
                <HintMom active={active} disabled={hints.momDisabled} onClick={() => { console.log(hints.useMomHint()) }}>
                    {active && (
                        <Dialog
                            dangerouslySetInnerHTML={{
                                __html: ` Где бросил, 
            там и лежит!`,
                            }}
                        />
                    )}
                </HintMom>
            )}
        </>
    )
}
