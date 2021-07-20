import { HintPerek, HintFather, HintMom } from './styled'

export default function Hint({ from, active, disabled }) {
    return (
        <>
            { from === 'perek' && <HintPerek active={active} disabled={disabled} />}
            { from === 'father' && <HintFather active={active} />}
            { from === 'mom' && <HintMom active={active} />}
        </>
    )
}
