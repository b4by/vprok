import styled from 'styled-components'
import perek from 'img/perek-hint.png'
import { breakpoints } from 'helpers/breakpoints'

export const Wrapper = styled.div`
`;

const Hint = styled.div`
    width: 105px;
    height: 105px;
    background-size: contain;
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
