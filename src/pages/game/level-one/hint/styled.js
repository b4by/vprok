import styled from 'styled-components'
import perek from 'img/perek-hint.png'
import { breakpoints } from 'helpers/breakpoints'

export const Wrapper = styled.div`
`;

const Hint = styled.div`
    width: 105px;
    height: 105px;
    background-size: contain;

    ${breakpoints.tablet} {
        width: 165px;
        height: 165px;
        margin-bottom: 54px;
    }

    ${breakpoints.desktop} {
        width: 279px;
        height: 279px;
        margin-bottom: 0;
    }
`;

export const HintPerek = styled(Hint)`
    background-image: url(${perek});
`;

export const HintFather = styled(Hint)`
    background-image: url(${perek});
`;

export const HintMom = styled(Hint)`
    background-image: url(${perek});
`;
