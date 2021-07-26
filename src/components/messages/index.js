import { useStore } from 'store'
import { observer } from 'mobx-react'
import { ReactComponent as NextSVG } from 'img/next.svg'
import { Wrapper, Next, Text } from './styled'

const Messages = observer(() => {
    const { game, training } = useStore()    
    const submit = () => {
        if(training.currentIndexText !== training.trainingText.length - 1) {
            training.increaseIndex()
        } else {
            game.setTrainingIsOver()
        }
    }

    const htmlText = training.getText()

    if(game.trainingIsOver) {
        return null;
    }

    return (
        <Wrapper>
            <Text  dangerouslySetInnerHTML={{__html: htmlText}} />
            <Next onClick={submit}>
                <NextSVG />
            </Next>
        </Wrapper>
    )
});

export default Messages
