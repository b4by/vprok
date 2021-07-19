import styled from 'styled-components'
import levelOne from 'img/lvl-1/bg.jpg'
import upperLayer from 'img/lvl-1/upper-layer.png'
import tomato from 'img/lvl-1/objects-tomato.png'
import radish from 'img/lvl-1/objects-radish.png'
import meat from 'img/lvl-1/objects-meat.png'
import wood from 'img/wood.jpg'
import { breakpoints } from 'helpers/breakpoints'
import timer from 'img/timer.png';
import timerBordered from 'img/timer-bordered.png';
import shampur from 'img/shampur.png';
import shampurOff from 'img/shampur-off.png';
import vectorShampur from 'img/vector-shampur.svg';
import vectorShampurTablet from 'img/vector-shampur-tablet.svg';
import vectorShampurMobile from 'img/vector-shampur-mobile.svg';
import vectorAnswer from 'img/vector-answer.svg';
import vectorAnswerTablet from 'img/vector-answer-tablet.svg';
import vectorAnswerMobile from 'img/vector-answer-mobile.svg';
import vectorTimer from 'img/vector-timer.svg';
import vectorTimerTablet from 'img/vector-timer-tablet.svg';
import vectorTimerMobile from 'img/vector-timer-mobile.svg';
import vectorMom from 'img/vector-mom.svg';
import vectorMomTablet from 'img/vector-mom-tablet.svg';
import vectorMomMobile from 'img/vector-mom-mobile.svg';
import vectorDad from 'img/vector-dad.svg';
import vectorDadTablet from 'img/vector-dad-tablet.svg';
import vectorDadMobile from 'img/vector-dad-mobile.svg';
import vectorPerek from 'img/vector-perek.svg';
import vectorPerekTablet from 'img/vector-perek-tablet.svg';
import vectorPerekMobile from 'img/vector-perek-mobile.svg';



export const Background = styled.div`
    position: relative;
    display: flex;
    background-image: url(${wood});
    height: 100vh;
    width: 100vw;
    background-size: contain;
    background-color: #FDFDDB;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: ${(props) => props.ratio ? `translate(-50%, -50%) scale(${props.ratio})` : 'none'};
    width: 640px;
    height: 360px;
    overflow: hidden;

    background-size: cover;
    background-image: url(${levelOne});

    ${breakpoints.tablet} {
        width: 1024px;
        height: 768px;
        background-position: center right;
    }

    ${breakpoints.desktop} {
        width: 1920px;
        height: 1080px;
        background-position: unset;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 640px;
        height: 360px;
        z-index: 10;
        background-image: url(${upperLayer});
        background-size: cover;
        background-repeat: no-repeat;

        ${breakpoints.tablet} {
            width: 1024px;
            height: 768px;
            background-position: center right;
        }

        ${breakpoints.desktop} {
            width: 1920px;
            height: 1080px;
            background-position: unset;
        }
    }
`;

export const Scene = styled.div``;

const Item = styled.div`
    position: absolute;
`;

export const Item1 = styled(Item)`
    top: 864px;
    left: 1248px;
    width: 132px;
    height: 65px;
    background-image: url(${meat});
    background-size: cover;
`;

export const Item2 = styled(Item)`
    top: 626px;
    left: 1267px;
    width: 85.5px;
    height: 52px;
    background-image: url(${radish});
    background-size: cover;
`;

export const Item3 = styled(Item)`
    top: 638px;
    left: 1134px;
    width: 46px;
    height: 39.5px;
    background-image: url(${tomato});
    background-size: cover;
`;

export const Shampur = styled(Item)`
    width: calc(21.5px * 0.33);
    height: calc(152.5px * 0.33);
    left: 365.33px;
    top: 127.5px;
    background: ${(props) => props.off ? `url(${shampurOff})` : `url(${shampur})`};
    background-size: cover;

    ${breakpoints.tablet} {
        width: calc(21.5px * 0.53);
        height: calc(152.5px * 0.53);
        left: 401px;
        top: 272px;
    }

    ${breakpoints.desktop} {
        top: 382.5px;
        left: 1097.5px;
        width: 21.5px;
        height: 152.5px;
    }
`;

export const Timer = styled.div`
    position: absolute;
    right: 30px;
    top: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 28px;

    background: rgba(0, 0, 0, 0.7);
    border: 1px solid #AAE600;
    box-sizing: border-box;
    border-radius: 100px;

    font-style: normal;
    font-weight: 550;
    text-align: center;
    color: #C5FF76;

    ${breakpoints.tablet} {
        width: 150px;
        height: 32px;
        font-style: normal;
        font-weight: 550;
        font-size: 20px;
        line-height: 112.63%;
        right: 35px;
        top: 92px;
    }

    ${breakpoints.desktop} {
        width: 365px;
        height: 78px;
        font-size: 40px;
        line-height: 112.63%;
        right: 116px;
        top: 92px;
    }

    &:after {
        content: '';
        position: absolute;
        right: 74px;
        bottom: -21px;
        width: 81px;
        height: 81px;
        background: ${(props) => props.showTimer ? `url(${timerBordered})` : `url(${timer})`};
        background-size: cover;

        ${breakpoints.tablet} {
            right: 100px;
            bottom: -30px;
            width: 97px;
            height: 98px;
        }

        ${breakpoints.desktop} {
            right: 247px;
            bottom: -75px;
            width: 236px;
            height: 237px;
        }
    }
`;

export const Hints = styled.div`
    position: absolute;
    top: 2px;
    left: 19px;

    display: flex;
    flex-direction: column;

    ${breakpoints.tablet} {
        top: 56px;
        left: 0;
    }

    ${breakpoints.desktop} {
        top: 36px;
        left: 60px;
    }
`;

export const Answers = styled.div`
    position: absolute;
    z-index: 11;
    display: flex;
    align-items: center;
    bottom: 16px;
    left: 22px;
    gap: 11px;

    ${breakpoints.tablet} {
        left: 30px;
        bottom: 35px;
        gap: 35px;
    }

    ${breakpoints.desktop} {
        left: 115px;
        bottom: 60px;
        gap: 60px;
    }
`;

export const Answer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 189px;
    height: 28px;

    background: rgba(0, 0, 0, 0.7);
    border: ${(props) => props.showAnswer ? `3px solid #ffffff` : `1px solid #AAE600`};
    box-sizing: border-box;
    border-radius: 100px;

    font-weight: 600;
    font-size: 16px;
    line-height: 112.63%;
    color: #C5FF76;

    ${breakpoints.tablet} {
        width: 297px;
        height: 45px;
        font-size: 20px;
    }

    ${breakpoints.desktop} {
        width: 523px;
        height: 78px;
        font-size: 40px;
        border: ${(props) => props.showAnswer ? `5px solid #ffffff` : `1px solid #AAE600`};
    }
`;


export const VectorShampur = styled.div`
    position: absolute;
    width: 92.73px;
    height: 80.79px;
    left: 362px;
    top: 153px;
    z-index: 12;
    background-image: url(${vectorShampurMobile});
    background-repeat: no-repeat;
    background-size: contain;

    display: ${(props) => props.visible ? `block` : `none`};

    ${breakpoints.tablet} {
        left: 376px;
        top: 329px;
        background-image: url(${vectorShampurTablet});
        width: 243px;
        height: 210px; 
    }
    ${breakpoints.desktop} {    
        width: 258px;
        height: 183px;
        left: 1115px;
        top: 514px;
        background-image: url(${vectorShampur});
    }
`;
export const VectorAnswer = styled(VectorShampur)`
    width: 103px;
    height: 92px;
    left: 376.22px;
    top: 251.14px;
    background-image: url(${vectorAnswerMobile});

    ${breakpoints.tablet} {
        left: 622px;
        top: 610px;
        width: 166px;
        height: 116px;
        background-image: url(${vectorAnswerTablet});
    }
    ${breakpoints.desktop} {
        width: 230px;
        height: 180px;
        left: 1190px;
        top: 790px;
        background-image: url(${vectorAnswer});
    }
`;
export const VectorTimer = styled(VectorShampur)`
    width: 212px;
    height: 216px;
    left: 371.77px;
    top: 35.3px;
    background-image: url(${vectorTimerMobile});    
    ${breakpoints.tablet} {
        width: 217px;
        height: 405px;
        left: 755.98px;
        top: 126px;
        background-image: url(${vectorTimerTablet});    
    }
    ${breakpoints.desktop} {    
        width: 390px;
        height: 457px;
        left: 1351px;
        top: 200px;
        background-image: url(${vectorTimer});
    }
`;
export const VectorHintMom = styled(VectorShampur)`
    width: 123px;
    height: 122px;
    left: 131px;
    top: 161.9px;
    background-image: url(${vectorMomMobile});    
    ${breakpoints.tablet} {
        width: 171px;
        height: 163px;
        left: 134.16px;
        top: 429.16px;
        background-image: url(${vectorMomTablet});    
    }
    ${breakpoints.desktop} {
        width: 249px;
        height: 239px;
        left: 253px;
        top: 509px;
        background-image: url(${vectorMom});    
    }
`;
export const VectorHintDad = styled(VectorShampur)`
    width: 101px;
    height: 90px;
    left: 114px;
    top: 150.25px;
    background-image: url(${vectorDadMobile});    
    ${breakpoints.tablet} {
        width: 157px;
        height: 133px;
        left: 150px;
        top: 378.43px;
        background-image: url(${vectorDadTablet});
    }
    ${breakpoints.desktop} {
        width: 227px;
        height: 183px;
        left: 288px;
        top: 466px;
        background-image: url(${vectorDad});    
    }
`;
export const VectorHintPerek  = styled(VectorShampur)`
    width: 147px;
    height: 191px;
    left: 93.19px;
    top: 44px;

    transform: rotate(-5.72deg);
    background-image: url(${vectorPerekMobile});    
    ${breakpoints.tablet} {
        width: 262px;
        height: 321px;
        left: 83.85px;
        top: 192.43px;
        background-image: url(${vectorPerekTablet});
    }
    ${breakpoints.desktop} {
        width: 393px;
        height: 454px;
        left: 211px;
        top: 260px;
        background-image: url(${vectorPerek});    
    }
`;