import styled from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

export const AnswerStyled = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    /* visibility: ${(props) => (props.hidden ? `hidden` : `visible`)}; */

    width: 189px;
    height: 28px;

    background: rgba(0, 0, 0, 0.7);
    border: ${(props) =>
        props.showAnswer ? `3px solid #ffffff` : `1px solid #AAE600`};
    box-sizing: border-box;
    border-radius: 100px;

    font-weight: 600;
    font-size: 16px;
    line-height: 112.63%;
    overflow: hidden;
    color: #c5ff76;

    ${breakpoints.tablet} {
        width: 297px;
        height: 45px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 523px;
        height: 78px;
        font-size: 40px;
        border: ${(props) =>
            props.showAnswer ? `5px solid #ffffff` : `1px solid #AAE600`};
    }

    &.answer-enter {
        transform: scale(0);
    }
    &.answer-enter-active {
        transform: scale(1);
        transition: transform 500ms;
        transition-delay: 500ms;
    }
    &.answer-exit {
        transform: scale(1);
    }
    &.answer-exit-active {
        transform: scale(0);
        transition: transform 500ms;

        margin-left: calc(-189px - 11px);

        ${breakpoints.tablet} {
            margin-left: calc(-297px - 35px);
        }

        ${breakpoints.desktop} {
            margin-left: calc(-523px - 60px);
        }
    }
`

export default function Answer({ children }) {
    return <AnswerStyled>{children}</AnswerStyled>
}
