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
                    <a
                        href="https://vk.com/share.php?url=https://zadacha.online/share&title=%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8%D1%82%D0%B5+%D0%BD%D0%B0%D0%B9%D1%82%D0%B8+%D1%88%D0%B0%D0%BC%D0%BF%D1%83%D1%80%D1%8B+%D0%B8+%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D0%B5+%D0%BF%D1%80%D0%B8%D0%B7%D1%8B+%D0%BE%D1%82+%D0%9F%D0%B5%D1%80%D0%B5%D0%BA%D1%80%D1%91%D1%81%D1%82%D0%BA%D0%B0+%D0%92%D0%BF%D1%80%D0%BE%D0%BA&image=https://zadacha.online/share/share-2.jpg&noparse=true"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <VkIconSvg />
                    </a>
                    <a
                        href="https://www.facebook.com/sharer.php?u=http://zadacha.online/share"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FbIconSvg />
                    </a>
                    <a
                        href="https://twitter.com/intent/tweet?url=https://zadacha.online/share"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwIconSvg />
                    </a>
                    <a
                        href="https://connect.ok.ru/offer?url=https://zadacha.online/share"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <OkIconSvg />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?text=https://zadacha.online/share"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <WaIconSvg />
                    </a>
                    <a
                        href="https://t.me/share/url?url=https://zadacha.online/share"
                        target="_blank"
                        rel="noreferrer"
                    >
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
