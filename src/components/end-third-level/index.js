import EndLevel, { Header, Subtitle, Text } from 'components/end-level'
import { useStore } from 'store'
import { observer } from 'mobx-react'
import { Form } from 'components/form/index'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { useLocation } from 'react-router-dom'
import { StyledNextBtn } from './styled'
import ShareScreen from 'components/share-screen/index'

const EndThirdLevel = observer(() => {
    const { game, modal } = useStore()

    const location = useLocation()

    useEffect(() => {
        const tagManagerArgs = {
            dataLayer: {
                event: 'promo',
                eventCategory: 'click',
                eventAction: 'level_3_done',
                eventLabel: location.pathname,
            },
        }
        TagManager.dataLayer(tagManagerArgs)
    }, [])

    return (
        <EndLevel>
            <Header>Уровень 3</Header>
            <Subtitle>Вы решили все дачные задачи!</Subtitle>
            <Text
                dangerouslySetInnerHTML={{
                    __html: `Узнайте свой СУПЕРПРИЗ`,
                }}
            />
            <Form />
            <StyledNextBtn
                onClick={() => {
                    modal.showModal(<ShareScreen />)
                }}
            >
                Поделиться
            </StyledNextBtn>
        </EndLevel>
    )
})

export default EndThirdLevel
