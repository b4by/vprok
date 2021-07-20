import { HintPerek, HintFather, HintMom, Dialog } from './styled'
import perekActive from 'img/hints/perek-active.png'
import perekDisabled from 'img/hints/perek-disabled.png'
import dad from 'img/hints/dad.png'
import dadActive from 'img/hints/dad-active.png'
import mom from 'img/hints/mom.png'
import momActive from 'img/hints/mom-active.png'
import dialog from 'img/hints/dialog.svg'

export default function Hint({ from, active, disabled }) {
    return (
        <>
            { from === 'perek' && <HintPerek active={active} disabled>{active && <Dialog dangerouslySetInnerHTML={{__html: `Ещё есть время. 
            Закажем недостающее?`}} />}</HintPerek>}
            { from === 'father' && <HintFather active={active} disabled={disabled}>{active && <Dialog dangerouslySetInnerHTML={{__html: `Не нашёл? 
            Спрошу у соседа!`}} />}</HintFather>}
            { from === 'mom' && <HintMom active={active} disabled={disabled}>{active && <Dialog dangerouslySetInnerHTML={{__html: ` Где бросил, 
            там и лежит!`}} />}</HintMom>}
        </>
    )
}
