import styled from 'styled-components'
import btn from 'img/prev-btn.svg'
import { breakpoints } from 'helpers/breakpoints'

export const StyledForm = styled.form`
    margin-bottom: 20px;

    ${breakpoints.desktop} {
        margin-bottom: 110px;
    }
`

export const StyledFormGroup = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 15px;
    height: 33px;
    ${breakpoints.tablet} {
        height: 54px;
        margin-bottom: 20px;
    }
    ${breakpoints.desktop} {
        height: 85px;
        margin-bottom: 35px;
    }
`

export const StyledEmailInput = styled.input.attrs({
    type: 'email',
})`
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 5px;
    font-family: Gilroy;
    outline: none;
    border: none;
    padding: 8px 0 6px 12px;
    flex: 1;
    &:focus {
    }
    &::placeholder {
        font-weight: 600;
        font-size: 14px;
        line-height: 112.63%;
        color: #999999;
        ${breakpoints.desktop} {
            font-size: 30px;
        }
    }

    ${breakpoints.tablet} {
        padding: 16px 0 16px 24px;
        font-size: 15px;
    }

    ${breakpoints.desktop} {
        padding: 16px 0 16px 24px;
        font-size: 30px;
    }
`

export const StyledSubmitInput = styled.input.attrs({
    type: 'submit',
})`
    box-sizing: border-box;
    flex: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 107px;
    height: 100%;
    background: none;
    background-image: url(${btn});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;
    border: none;
    font-family: 'Marck Script', cursive;
    font-size: 15px;
    line-height: 112.63%;

    ${breakpoints.tablet} {
        width: 177px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 278px;
        font-size: 38px;
    }

    &:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9Ijk5IiB2aWV3Qm94PSIwIDAgMzI0IDk5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI4Ljc1NzkgOTguNjY2OUgzMTQuNzg5QzMxOS4zOTggOTguNjY2OSAzMjMuMTMzIDk0Ljg5MjggMzIzLjEzMyA5MC4yMzU1VjE2Ljg5MDRDMzIzLjEzMyAxMi4yMzMxIDMxOS4zOTggOC40NTg5OCAzMTQuNzg5IDguNDU4OThIMjguNzU1NUMyNS41ODQ1IDguNDU4OTggMjIuNjg5MSAxMC4yNzUxIDIxLjI4MDkgMTMuMTQ2MUwxLjA4NTI0IDQyLjY4NzJDMC4wMDkzMzgzOCA0NC44ODE1IC0xLjQxMTI1IDQ3LjMxOTYgMy4xNjMxNSA1Ny4wNDQ3TDIxLjI4MDkgOTMuOTgyMkMyMi42ODkxIDk2Ljg1MDcgMjUuNTg2OSA5OC42NjY5IDI4Ljc1NzkgOTguNjY2OVoiIGZpbGw9IiMwNDNFNDQiLz4KPHBhdGggZD0iTTI3Ljc3MjkgOTEuMjAzSDMxMy44MDRDMzE4LjQxMyA5MS4yMDMgMzIyLjE0OCA4Ny40Mjg5IDMyMi4xNDggODIuNzcxNlY5LjQyNjUzQzMyMi4xNDggNC43NjkyMiAzMTguNDEzIDAuOTk1MTE3IDMxMy44MDQgMC45OTUxMTdIMjcuNzcwNEMyNC41OTk0IDAuOTk1MTE3IDIxLjcwNDEgMi44MTEyNyAyMC4yOTU4IDUuNjgyMjdMMi4xNzgwNyA0Mi42MTk4QzEuMTAyMTcgNDQuODE0MSAxLjEwMjE3IDQ3LjM4OSAyLjE3ODA3IDQ5LjU4MDhMMjAuMjk1OCA4Ni41MTgzQzIxLjcwNDEgODkuMzg2OCAyNC42MDE4IDkxLjIwMyAyNy43NzI5IDkxLjIwM1oiIGZpbGw9IiMxNDcyQTgiLz4KPHBhdGggZD0iTTYuMzI4OTUgNTguMDM2OEwyMC4yOTgyIDg2LjUxNTZDMjEuNzA2NSA4OS4zODY2IDI0LjYwMTggOTEuMjAyNyAyNy43NzI5IDkxLjIwMjdIMzEzLjgwNkMzMTguNDEzIDkxLjIwMjcgMzIyLjE0OCA4Ny40Mjg2IDMyMi4xNDggODIuNzcxM1Y1My41ODExQzI3NS43ODEgNjUuMDY3NiAyMTcuNTc3IDcxLjkwNDMgMTU0LjM3OCA3MS45MDQzQzk5Ljg0MjYgNzEuOTA0MyA0OS4wMjcyIDY2LjgxNDEgNi4zMjg5NSA1OC4wMzY4WiIgZmlsbD0iIzBFNTk4NCIvPgo8cGF0aCBkPSJNMjcuNzczMSA5Mi4xOTgySDMxMy44MDRDMzE4Ljk0NyA5Mi4xOTgyIDMyMy4xMzMgODcuOTY4OCAzMjMuMTMzIDgyLjc3MTZWOS40MjY1NkMzMjMuMTMzIDQuMjI5MzkgMzE4Ljk0NyAwIDMxMy44MDQgMEgyNy43NzA3QzI0LjIwMDggMCAyMC45OTc4IDIuMDA3NzIgMTkuNDEyMiA1LjIzOTQ3TDEuMjk0NDkgNDIuMTc3QzAuMDkwNTc2MiA0NC42MzI1IDAuMDkwNTc2MiA0Ny41NjU3IDEuMjk0NDkgNTAuMDIzN0wxOS40MTIyIDg2Ljk2MTJDMjEuMDAwMiA5MC4xOTA1IDI0LjIwMzMgOTIuMTk4MiAyNy43NzMxIDkyLjE5ODJaTTMxMy44MDQgMS45OTAzQzMxNy44NjIgMS45OTAzIDMyMS4xNjMgNS4zMjY1NCAzMjEuMTYzIDkuNDI2NTZWODIuNzcxNkMzMjEuMTYzIDg2Ljg3MTcgMzE3Ljg2MiA5MC4yMDc5IDMxMy44MDQgOTAuMjA3OUgyNy43NzA3QzI0Ljk1NDIgOTAuMjA3OSAyMi40MjgyIDg4LjYyMzEgMjEuMTc3NSA4Ni4wNzU1TDMuMDU5NzIgNDkuMTM4QzIuMTI2NjIgNDcuMjM0OCAyLjEyNjYyIDQ0Ljk2MzQgMy4wNTk3MiA0My4wNjAyTDIxLjE3NzUgNi4xMjI2NkMyMi40MzA3IDMuNTc1MDggMjQuOTU2NiAxLjk5MDMgMjcuNzczMSAxLjk5MDNIMzEzLjgwNFoiIGZpbGw9IiMwNDNFNDQiLz4KPHBhdGggZD0iTTI1LjkyMDUgMTYuOTA4QzI2Ljc3NjEgMTkuNDM2OCAzMS4xMjIyIDIxLjE4OTYgMzguNzEwMSAxOC41OTQ5QzQ2LjI5OCAxNi4wMDAyIDUxLjk1MTEgMTMuODIzMSA1MS4wOTU1IDExLjI5NDNDNTAuMjQgOC43NjU1NCA0My4yMDA5IDMuODQ4NzYgMzUuNjEwNyA2LjQ0NDI0QzI4LjAyMDQgOS4wMzk3MiAyNS4wNjUgMTQuMzc5MyAyNS45MjA1IDE2LjkwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMC44NDY1IDI1LjQ2NjVDMjAuODQ2NSAyNi45MDIgMjMuNDQzOSAyOS4wMzQxIDI0Ljk5MjQgMjkuMDM0MUMyNi41NDEgMjkuMDM0MSAyNy43OTkxIDI3Ljg2OTggMjcuNzk5MSAyNi40MzQzQzI3Ljc5OTEgMjQuOTk4OCAyNS40MzMxIDIyLjQyMzggMjMuODg0NiAyMi40MjM4QzIyLjMzNiAyMi40MjM4IDIwLjg0NjUgMjQuMDMxIDIwLjg0NjUgMjUuNDY2NVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMzIzLjEzMyIgaGVpZ2h0PSI5OC42NjY3IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzIzLjEzMyAwKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=);
    }
`

export const StyledFormError = styled.p`
    position: absolute;
    top: 35px;
    left: 0;
    color: #f44336;
    margin: 0;
    font-size: 10px;
    ${breakpoints.tablet} {
        top: 55px;
        font-size: 11px;
    }

    ${breakpoints.desktop} {
        top: 87px;
        font-size: 20px;
    }
`

export const StyledCheckboxContainer = styled.div``

export const StyledCheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const StyledCheckboxText = styled.span`
    font-family: 'HelveticaNeueCyr';
    font-style: normal;
    font-weight: 300;
    font-size: 8px;
    line-height: 136.8%;
    color: #7b735d;
    opacity: 0.5;
    margin-left: 5px;
    ${breakpoints.tablet} {
        font-size: 11px;
    }

    ${breakpoints.desktop} {
    }
`

export const StyledFormLink = styled.a`
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 3px;
`

export const StyledCheckboxInput = styled.input.attrs({
    type: 'checkbox',
})`
    position: absolute;
    appearance: none;
    &:not(:checked) + ${StyledCheckboxLabel} svg path:first-child {
        display: none;
    }
`

export const StyledFooterText = styled.p`
    font-family: 'HelveticaNeueCyr';
    font-style: normal;
    font-weight: 300;
    font-size: 6px;
    line-height: 136.8%;
    color: #7b735d;
    opacity: 0.5;
    ${breakpoints.tablet} {
        font-size: 11px;
    }

    ${breakpoints.desktop} {
    }
`
