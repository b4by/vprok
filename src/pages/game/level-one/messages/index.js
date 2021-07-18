import { useStore } from 'store'
import { ReactComponent as NextSVG } from 'img/next.svg'
import { Wrapper, Next, Text } from './styled'

const Messages = () => {
    const { game } = useStore()    
    const submit = () => {
        game.start()
    }
    
    if(game.isOver) {
        console.log('Game Over!')
    }

    return (
        <Wrapper>
            <Text>
Подсказки можно использовать один раз за уровень. В игре три уровня. Пройдите их все, чтобы получить суперприз — скидку до 20% на заказ в приложении Перекрёсток Впрок.            </Text>
            <Next onClick={submit}>
                <NextSVG />
            </Next>
        </Wrapper>
    )
};

export default Messages
