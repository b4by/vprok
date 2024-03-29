import styled, { keyframes } from 'styled-components'
import play from 'img/play.svg'
import { breakpoints } from 'helpers/breakpoints'

export const TextMobile = styled.div`
    box-sizing: border-box;
    display: none;
    position: relative;
    width: 295px;
    margin: 0 auto;
    z-index: 2;
    white-space: pre-line;
    margin-bottom: 17px;
    user-select: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 112.63%;
    text-align: center;

    color: #000000;

    a {
        color: #000;
    }

    ${breakpoints.onlyMobile} {
        display: block;
    }
`

export const TextTablet = styled(TextMobile)`
    width: 100%;
    max-width: 743px;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 112.63%;

    a {
        color: #000;
    }

    ${breakpoints.onlyMobile} {
        display: none;
    }

    ${breakpoints.onlyTablet} {
        display: block;
        margin-bottom: 38px;
    }

    ${breakpoints.onlyDesktop} {
        display: none;
    }
`

export const TextDesktop = styled(TextMobile)`
    width: 100%;
    font-size: 38px;
    line-height: 112.63%;
    max-width: 1419px;
    margin-bottom: 50px;

    a {
        color: #000;
    }

    ${breakpoints.onlyMobile} {
        display: none;
    }

    ${breakpoints.onlyTablet} {
        display: none;
    }

    ${breakpoints.onlyDesktop} {
        display: block;
    }
`

const heartbeat = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  34% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  66% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`
const push = keyframes`
  0% {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  50% {
    transform: scale(0.5);
    animation-timing-function: ease-in;
  }
  100%{
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`

export const PlayContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    user-select: none;
`

export const PlayButon = styled.div`
    width: 138px;
    height: 140px;
    background-image: url(${play});
    background-size: cover;
    cursor: pointer;
    animation: ${heartbeat} 4s ease-in-out infinite both;

    &.push {
        animation: ${push} 0.4s forwards;
    }
    &:active,
    &:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzk2IDQwNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5Ny43MDUgNDAzLjAwNEMzMDUuNTY3IDQwMy4wMDQgMzkzLjAwNiAzMTUuNTY1IDM5My4wMDYgMjA3LjcwM0MzOTMuMDA2IDk5Ljg0MTUgMzA1LjU2NyAxMi40MDIzIDE5Ny43MDUgMTIuNDAyM0M4OS44NDM3IDEyLjQwMjMgMi40MDQ1NCA5OS44NDE1IDIuNDA0NTQgMjA3LjcwM0MyLjQwNDU0IDMxNS41NjUgODkuODQzNyA0MDMuMDA0IDE5Ny43MDUgNDAzLjAwNFoiIGZpbGw9IiMyQTcyMDAiLz4KPHBhdGggZD0iTTE5Ni45OCAzODQuNTQyQzMwNC44NDIgMzg0LjU0MiAzOTIuMjgxIDI5OS4yNTggMzkyLjI4MSAxOTQuMDU1QzM5Mi4yODEgODguODUyMyAzMDQuODQyIDMuNTY4MzYgMTk2Ljk4IDMuNTY4MzZDODkuMTE4MyAzLjU2ODM2IDEuNjc5MiA4OC44NTIzIDEuNjc5MiAxOTQuMDU1QzEuNjc5MiAyOTkuMjU4IDg5LjExODMgMzg0LjU0MiAxOTYuOTggMzg0LjU0MloiIGZpbGw9IiM0QThFMjUiLz4KPHBhdGggZD0iTTEwMC42NzIgMTAxLjQyQzEwNi4zNjIgOTUuNzMwNSAxMDYuODU2IDg3LjAwMTIgMTAxLjc3NyA4MS45MjIxQzk2LjY5ODMgNzYuODQzMSA4Ny45Njg5IDc3LjMzNzcgODIuMjc5NyA4My4wMjY5Qzc2LjU5MDUgODguNzE2MSA3Ni4wOTU5IDk3LjQ0NTUgODEuMTc0OSAxMDIuNTI1Qzg2LjI1MzkgMTA3LjYwNCA5NC45ODMzIDEwNy4xMDkgMTAwLjY3MiAxMDEuNDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODIuMTI2NiAxMjIuMTU5Qzg1LjQ1MTIgMTE4LjgzNSA4NS43NDA5IDExMy43MzQgODIuNzczNyAxMTAuNzY3Qzc5LjgwNjUgMTA3LjggNzQuNzA2IDEwOC4wODkgNzEuMzgxNSAxMTEuNDE0QzY4LjA1NjkgMTE0LjczOSA2Ny43NjcyIDExOS44MzkgNzAuNzM0NCAxMjIuODA2QzczLjcwMTYgMTI1Ljc3MyA3OC44MDIxIDEyNS40ODQgODIuMTI2NiAxMjIuMTU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM5Mi42MjcgMTkxLjIxM0MzOTIuNjI3IDI5Ni40MTMgMzA1LjE4OCAzODEuNyAxOTcuMzI2IDM4MS43Qzg5LjQ2MzQgMzgxLjcgMi4wMjQ5IDI5Ni40MTMgMi4wMjQ5IDE5MS4yMTNDMi4wMjQ5IDE3Ny4wMDUgMy42MjE0MiAxNjMuMTYyIDYuNjQ0MDkgMTQ5Ljg0QzI2LjAxNjUgMjM1LjE0NiAxMDQuMDMyIDI5OC45NTQgMTk3LjMyNiAyOTguOTU0QzI5MC42MiAyOTguOTU0IDM2OC42MzUgMjM1LjE0NiAzODguMDA3IDE0OS44NEMzOTEuMDMgMTYzLjE2MiAzOTIuNjI3IDE3Ny4wMDUgMzkyLjYyNyAxOTEuMjEzWiIgZmlsbD0iIzM4N0YwRSIvPgo8cGF0aCBkPSJNMjU5LjE0NyAyMDMuNTc5QzI2MC45MjMgMjAxLjAyNCAyNjAuNzA5IDE5Ny41ODcgMjU4LjYyNiAxOTUuMjc1QzI1MC42MjQgMTg2LjM5MiAyMzEuMTg4IDE2NC45NjYgMjIyLjg0MSAxNTcuMDg1QzIxMy41MzQgMTQ4LjMgMTg4LjIwNCAxMjcuMjY4IDE3Ni41NjYgMTE3LjY2NEMxNzQuMTEzIDExNS42MzkgMTcwLjQxNCAxMTcuMzE0IDE3MC4zMTEgMTIwLjQ5MkMxNjkuNzE4IDEzOC45MiAxNjguMzY5IDE4NS4xMTIgMTY5LjA4NSAyMDIuOTM3QzE2OS44MiAyMjEuMjY3IDE3NC43NzUgMjY2LjM3NCAxNzYuODUzIDI4NC43NDhDMTc3LjIzOCAyODguMTQ2IDE4MS4yNjggMjg5LjcwOCAxODMuODQ4IDI4Ny40NkMxOTQuNzk5IDI3Ny45MSAyMTcuNDU3IDI1Ny45MTQgMjI1LjU1NyAyNDguOTM5QzIzMy42ODUgMjM5LjkzOSAyNTEuOTMzIDIxMy45NjEgMjU5LjE0NyAyMDMuNTc5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE5Ny43MzUgMzg1Ljg0MUMxNzEuMDUxIDM4NS44NDEgMTQ1LjE2MSAzODAuNzQ1IDEyMC43ODUgMzcwLjY4OUM5Ny4yNDE1IDM2MC45NzQgNzYuMDkyNSAzNDcuMDcyIDU3LjkzNyAzMjkuMzZDMzkuNzcxOCAzMTEuNjQyIDI1LjUxMDIgMjkxLjAxNCAxNS41NDY2IDI2OC4wMzVDNS4yMzI0OSAyNDQuMjQzIDAgMjE4Ljk3MSAwIDE5Mi45MjFDMCAxNjYuODcgNS4yMzI0OSAxNDEuNTk4IDE1LjU0NjYgMTE3LjgwNkMyNS41MTAyIDk0LjgzMjIgMzkuNzcxOCA3NC4xOTkxIDU3LjkzNyA1Ni40ODE3Qzc2LjA5NzQgMzguNzY5MSA5Ny4yNDE1IDI0Ljg2MjggMTIwLjc4NSAxNS4xNTIzQzE0NS4xNjEgNS4wOTYyIDE3MS4wNTEgMCAxOTcuNzM1IDBDMjI0LjQxOCAwIDI1MC4zMDggNS4wOTYyIDI3NC42ODQgMTUuMTUyM0MyOTguMjI4IDI0Ljg2NzcgMzE5LjM3MiAzOC43NjkxIDMzNy41MzIgNTYuNDgxN0MzNTUuNjk3IDc0LjE5OTEgMzY5Ljk1OSA5NC44MjczIDM3OS45MjIgMTE3LjgwNkMzOTAuMjQxIDE0MS41OTggMzk1LjQ2OSAxNjYuODcgMzk1LjQ2OSAxOTIuOTIxQzM5NS40NjkgMjE4Ljk3MSAzOTAuMjM3IDI0NC4yNDMgMzc5LjkyMiAyNjguMDM1QzM2OS45NTkgMjkxLjAwOSAzNTUuNjk3IDMxMS42NDIgMzM3LjUzMiAzMjkuMzZDMzE5LjM3MiAzNDcuMDcyIDI5OC4yMjggMzYwLjk3OCAyNzQuNjg0IDM3MC42ODlDMjUwLjMwOCAzODAuNzQ1IDIyNC40MjMgMzg1Ljg0MSAxOTcuNzM1IDM4NS44NDFaTTE5Ny43MzUgNC44Njc0M0M5MS4zODYgNC44Njc0MyA0Ljg2NzQzIDg5LjIyOTcgNC44Njc0MyAxOTIuOTIxQzQuODY3NDMgMjk2LjYxMiA5MS4zODYgMzgwLjk3NCAxOTcuNzM1IDM4MC45NzRDMzA0LjA4MyAzODAuOTc0IDM5MC42MDIgMjk2LjYxMiAzOTAuNjAyIDE5Mi45MjFDMzkwLjYwMiA4OS4yMjk3IDMwNC4wODMgNC44Njc0MyAxOTcuNzM1IDQuODY3NDNaIiBmaWxsPSIjMkE3MjAwIi8+Cjwvc3ZnPgo=);
    }

    ${breakpoints.desktop} {
        width: 240px;
        height: 244px;
    }
`

export const DachaText = styled.div`
    display: block;
    margin: 0 auto;
    width: 203px;
    height: 127px;
    justify-content: center;
    margin-bottom: 24px;
    margin-top: 51px;

    & svg {
        display: block;
    }

    ${breakpoints.tablet} {
        display: none;
    }
    ${breakpoints.desktop} {
        display: none;
    }
`

export const DachaTextTablet = styled.div`
    display: none;
    margin-bottom: 16px;

    ${breakpoints.tablet} {
        display: block;
        margin: 0 auto;
        justify-content: center;
        width: 630px;
        height: 114px;
        margin-top: 112px;

        & svg {
            display: block;
        }
    }
    ${breakpoints.desktop} {
        display: none;
    }
`

export const DachaTextDesk = styled.div`
    display: none;
    margin-bottom: 4px;

    ${breakpoints.tablet} {
        display: none;
    }
    ${breakpoints.desktop} {
        display: block;
        margin: 0 auto;
        width: 1204px;
        height: 219px;
        margin-top: 112px;

        & svg {
            display: block;
        }
    }
`
