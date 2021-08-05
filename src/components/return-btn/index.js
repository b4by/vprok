import styled, { keyframes } from 'styled-components'
import btn from 'img/next-btn.svg'
import { breakpoints } from 'helpers/breakpoints'
import SoundClick from 'components/sound-click'

const scale = keyframes`
    0% {
        transform: scale(0);
    }
    80% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 131px;
    min-height: 53px;
    background-image: url(${btn});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;
    user-select: none;

    font-family: Marck Script;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 112.63%;

    animation: ${scale} 0.5s ease both;

    ${breakpoints.tablet} {
        min-width: 188.35px;
        min-height: 70px;
        font-size: 30px;
    }

    ${breakpoints.desktop} {
        min-width: 323.13px;
        min-height: 101px;
        font-size: 46px;
    }

    &:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9Ijk5IiB2aWV3Qm94PSIwIDAgMzI0IDk5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjk0Ljc3NCA5OC42NjY5SDguNzQzMDlDNC4xMzQyNSA5OC42NjY5IDAuMzk5NDE0IDk0Ljg5MjggMC4zOTk0MTQgOTAuMjM1NVYxNi44OTA0QzAuMzk5NDE0IDEyLjIzMzEgNC4xMzQyNSA4LjQ1ODk4IDguNzQzMDkgOC40NTg5OEgyOTQuNzc3QzI5Ny45NDggOC40NTg5OCAzMDAuODQzIDEwLjI3NTEgMzAyLjI1MSAxMy4xNDYxTDMyMi40NDcgNDIuNjg3MkMzMjMuNTIzIDQ0Ljg4MTUgMzI0Ljk0MyA0Ny4zMTk2IDMyMC4zNjkgNTcuMDQ0N0wzMDIuMjUxIDkzLjk4MjJDMzAwLjg0MyA5Ni44NTA3IDI5Ny45NDUgOTguNjY2OSAyOTQuNzc0IDk4LjY2NjlaIiBmaWxsPSIjMDQzRTQ0Ii8+CjxwYXRoIGQ9Ik0yOTUuNzU5IDkxLjIwM0g5LjcyODA3QzUuMTE5MjMgOTEuMjAzIDEuMzg0NCA4Ny40Mjg5IDEuMzg0NCA4Mi43NzE2VjkuNDI2NTNDMS4zODQ0IDQuNzY5MjIgNS4xMTkyMyAwLjk5NTExNyA5LjcyODA3IDAuOTk1MTE3SDI5NS43NjJDMjk4LjkzMyAwLjk5NTExNyAzMDEuODI4IDIuODExMjcgMzAzLjIzNiA1LjY4MjI3TDMyMS4zNTQgNDIuNjE5OEMzMjIuNDMgNDQuODE0MSAzMjIuNDMgNDcuMzg5IDMyMS4zNTQgNDkuNTgwOEwzMDMuMjM2IDg2LjUxODNDMzAxLjgyOCA4OS4zODY4IDI5OC45MyA5MS4yMDMgMjk1Ljc1OSA5MS4yMDNaIiBmaWxsPSIjMDlBNzM1Ii8+CjxwYXRoIGQ9Ik0zMTcuMjAzIDU4LjAzNjhMMzAzLjIzNCA4Ni41MTU2QzMwMS44MjYgODkuMzg2NiAyOTguOTMgOTEuMjAyNyAyOTUuNzU5IDkxLjIwMjdIOS43MjU2MUM1LjExOTIzIDkxLjIwMjcgMS4zODQ0IDg3LjQyODYgMS4zODQ0IDgyLjc3MTNWNTMuNTgxMUM0Ny43NTEgNjUuMDY3NiAxMDUuOTU1IDcxLjkwNDMgMTY5LjE1NCA3MS45MDQzQzIyMy42ODkgNzEuOTA0MyAyNzQuNTA1IDY2LjgxNDEgMzE3LjIwMyA1OC4wMzY4WiIgZmlsbD0iIzBBNzMwOCIvPgo8cGF0aCBkPSJNMjk1Ljc1OSA5Mi4xOTgySDkuNzI3ODhDNC41ODQ3OSA5Mi4xOTgyIDAuMzk5NDE0IDg3Ljk2ODggMC4zOTk0MTQgODIuNzcxNlY5LjQyNjU2QzAuMzk5NDE0IDQuMjI5MzkgNC41ODQ3OSAwIDkuNzI3ODggMEgyOTUuNzYyQzI5OS4zMzEgMCAzMDIuNTM0IDIuMDA3NzIgMzA0LjEyIDUuMjM5NDdMMzIyLjIzOCA0Mi4xNzdDMzIzLjQ0MiA0NC42MzI1IDMyMy40NDIgNDcuNTY1NyAzMjIuMjM4IDUwLjAyMzdMMzA0LjEyIDg2Ljk2MTJDMzAyLjUzMiA5MC4xOTA1IDI5OS4zMjkgOTIuMTk4MiAyOTUuNzU5IDkyLjE5ODJaTTkuNzI3ODggMS45OTAzQzUuNjcwNTMgMS45OTAzIDIuMzY5IDUuMzI2NTQgMi4zNjkgOS40MjY1NlY4Mi43NzE2QzIuMzY5IDg2Ljg3MTcgNS42NzA1MyA5MC4yMDc5IDkuNzI3ODggOTAuMjA3OUgyOTUuNzYyQzI5OC41NzggOTAuMjA3OSAzMDEuMTA0IDg4LjYyMzEgMzAyLjM1NSA4Ni4wNzU1TDMyMC40NzMgNDkuMTM4QzMyMS40MDYgNDcuMjM0OCAzMjEuNDA2IDQ0Ljk2MzQgMzIwLjQ3MyA0My4wNjAyTDMwMi4zNTUgNi4xMjI2NkMzMDEuMTAyIDMuNTc1MDggMjk4LjU3NiAxLjk5MDMgMjk1Ljc1OSAxLjk5MDNIOS43Mjc4OFoiIGZpbGw9IiMwNDNFNDQiLz4KPHBhdGggZD0iTTQzLjU2NjEgMTEuMTAwNEM0My41NjYxIDEzLjc3NDkgNDAuNDc3NCAxOS43MzM3IDMyLjQ2NjEgMTkuNzMzN0MyNC40NTQ4IDE5LjczMzcgMTguODk5NCAxNy40NzQ5IDE4Ljg5OTQgMTQuODAwNEMxOC44OTk0IDEyLjEyNTkgMjEuOTg1NiA3LjQwMDM5IDI5Ljk5OTQgNy40MDAzOUMzOC4wMTMyIDcuNDAwMzkgNDMuNTY2MSA4LjQyNTkyIDQzLjU2NjEgMTEuMTAwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNi42ODI5IDE4LjQ1NDhDMTYuNjgyOSAxOS44OTAzIDE0LjA4NTUgMjIuMDIyNCAxMi41MzY5IDIyLjAyMjRDMTAuOTg4MyAyMi4wMjI0IDkuNzMwMjIgMjAuODU4MSA5LjczMDIyIDE5LjQyMjZDOS43MzAyMiAxNy45ODcxIDEyLjA5NjIgMTUuNDEyMSAxMy42NDQ4IDE1LjQxMjFDMTUuMTkzNCAxNS40MTIxIDE2LjY4MjkgMTcuMDE5MyAxNi42ODI5IDE4LjQ1NDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
    }
`

export default function ReturnBtn({ children, onClick }) {
    return (
        <SoundClick type="click">
            <Wrapper onClick={onClick}>{children}</Wrapper>
        </SoundClick>
    )
}
