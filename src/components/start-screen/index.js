import { ReactComponent as Logo } from 'img/logo.svg'
import { ReactComponent as Huawei } from 'img/huawei-store.svg'
import { ReactComponent as Apple } from 'img/apple-store.svg'
import { ReactComponent as Google } from 'img/google-play.svg'
import {
    HomeContainer,
    LogoContainer,
    Content,
    StoreIcons,
    StoreIcon,
    StyledLink,
    LogoImg,
} from './styled'
import VegetablesMobile from './vegetables-mobile'
import VegetablesDesktop from './vegetables-desktop'

export default function StartScreen({ children }) {
    return (
        <HomeContainer>
            <LogoContainer>
                <StyledLink
                    href="https://www.vprok.ru/?utm_source=qm&utm_medium=zadachaonline&utm_campaign=logo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LogoImg>
                        <Logo />
                    </LogoImg>
                </StyledLink>
                <StoreIcons>
                    <StoreIcon>
                        <Huawei />
                    </StoreIcon>
                    <StoreIcon>
                        <Apple />
                    </StoreIcon>
                    <StoreIcon>
                        <Google />
                    </StoreIcon>
                </StoreIcons>
            </LogoContainer>
            <Content>
                {children}
                <VegetablesMobile />
                <VegetablesDesktop />
            </Content>
        </HomeContainer>
    )
}
