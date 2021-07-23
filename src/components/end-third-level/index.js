import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import NextBtn from 'components/next-btn'
import PrevBtn from 'components/prev-btn'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import Buttons from 'components/buttons'

const EndThirdLevel = observer(() => {
    const { game } = useStore()

    return (
        <EndLevel>
            <Header>Уровень 3</Header>
            <Subtitle>Вы решили все дачные задачи!</Subtitle>
            <Text
                dangerouslySetInnerHTML={{
                    __html: `Узнайте свой СУПЕРПРИЗ`,
                }}
            />
        </EndLevel>
    )
})

export default EndThirdLevel
