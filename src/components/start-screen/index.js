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
                    <StyledLink
                        href="https://darkstore.onelink.me/aH8K?pid=qm&c=dachnyezadachi&af_dp=ru.perekrestok.app.darkstore%3A%2F%2Fmain&af_web_dp=https%3A%2F%2Fwww.vprok.ru%2F%3Futm_source%3Dqm%26utm_medium%3Dperformance%26utm_campaign%3Ddachnyezadachi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StoreIcon>
                            <Huawei />
                        </StoreIcon>
                    </StyledLink>
                    <StyledLink
                        href="https://darkstore.onelink.me/aH8K?pid=qm&c=dachnyezadachi&af_dp=ru.perekrestok.app.darkstore%3A%2F%2Fmain&af_web_dp=https%3A%2F%2Fwww.vprok.ru%2F%3Futm_source%3Dqm%26utm_medium%3Dperformance%26utm_campaign%3Ddachnyezadachi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StoreIcon>
                            <Apple />
                        </StoreIcon>
                    </StyledLink>
                    <StyledLink
                        href="https://darkstore.onelink.me/aH8K?pid=qm&c=dachnyezadachi&af_dp=ru.perekrestok.app.darkstore%3A%2F%2Fmain&af_web_dp=https%3A%2F%2Fwww.vprok.ru%2F%3Futm_source%3Dqm%26utm_medium%3Dperformance%26utm_campaign%3Ddachnyezadachi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StoreIcon>
                            <Google />
                        </StoreIcon>
                    </StyledLink>
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
