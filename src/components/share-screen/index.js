import {
    ShareScreenEndLevel,
    StyledCloseIconSvg,
    ShareScreenContainer,
    ShareScreenTitle,
    ShareScreenGroup,
    ShareScreenFlexContainer,
    ShareScreenInput,
    ShareScreenBtn,
} from './styled'
import { ReactComponent as VkIconSvg } from 'assets/svg/vk-icon.svg'
import { ReactComponent as FbIconSvg } from 'assets/svg/fb-icon.svg'
import { ReactComponent as TwIconSvg } from 'assets/svg/tw-icon.svg'
import { ReactComponent as OkIconSvg } from 'assets/svg/ok-icon.svg'
import { ReactComponent as WaIconSvg } from 'assets/svg/wa-icon.svg'
import { ReactComponent as TgIconSvg } from 'assets/svg/tg-icon.svg'
import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store/index'
import { useOnClickOutside } from 'hooks/useOnClickOutside'

const ShareScreen = observer(() => {
    let myInput = null
    const myRef = useRef()
    const { modal } = useStore()

    const copyToClipboard = () => {
        myInput.select()
        document.execCommand('copy')
    }

    useOnClickOutside(myRef, () => modal.closeModal())

    return (
        <ShareScreenEndLevel>
            <ShareScreenContainer ref={myRef}>
                <StyledCloseIconSvg onClick={() => modal.closeModal()} />
                <ShareScreenTitle>Поделиться</ShareScreenTitle>
                <ShareScreenGroup>
                    <a href="https://vk.com/share.php?url=https://zadacha.online ">
                        <VkIconSvg />
                    </a>
                    <a href="https://www.facebook.com/sharer.php?u=http://zadacha.online">
                        <FbIconSvg />
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=Помогите найти шампуры и получите призы от Перекрёстка Впрок&url=https://zadacha.online/">
                        <TwIconSvg />
                    </a>
                    <a href="https://connect.ok.ru/offer?url=https://zadacha.online/share">
                        <OkIconSvg />
                    </a>
                    <a href="">
                        <WaIconSvg />
                    </a>
                    <a href="https://t.me/share/url?url=https://zadacha.online/share">
                        <TgIconSvg />
                    </a>
                </ShareScreenGroup>
                <ShareScreenFlexContainer>
                    <ShareScreenInput
                        readOnly
                        value="https://zadacha.online/share"
                        ref={(ref) => (myInput = ref)}
                    />
                    <ShareScreenBtn onClick={copyToClipboard}>
                        Копировать
                    </ShareScreenBtn>
                </ShareScreenFlexContainer>
            </ShareScreenContainer>
        </ShareScreenEndLevel>
    )
})

export default ShareScreen
