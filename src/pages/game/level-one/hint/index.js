import { HintPerek, HintFather, HintMom, Dialog } from './styled'

export default function Hint({ from, active, disabled }) {
    return (
        <>
            { from === 'perek' && <HintPerek active={active} disabled={disabled}>{active && <Dialog dangerouslySetInnerHTML={{__html: `Ещё есть время. 
            Закажем недостающее?`}} />}</HintPerek>}
            { from === 'father' && <HintFather active={active} disabled={disabled}>{active && <Dialog dangerouslySetInnerHTML={{__html: `Не нашёл? 
            Спрошу у соседа!`}} />}</HintFather>}
            { from === 'mom' && <HintMom active={active} disabled={disabled}>{active && <Dialog dangerouslySetInnerHTML={{__html: ` Где бросил, 
            там и лежит!`}} />}</HintMom>}
        </>
    )
}
