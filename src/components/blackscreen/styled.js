import styled from 'styled-components'
import { breakpoints } from 'helpers/breakpoints'

export const Content = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    color: #fff;
    z-index: 20000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media all and (orientation: landscape) {
        display: none;
    }
`

export const Text = styled.div`
    text-transform: uppercase;
    font-size: 2em;
    text-align: center;
`

export const Turn = styled.div`
    margin: 30px 0 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdgAAAGBCAMAAADyhlCUAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMAUMAPsIAW9PEd7pT2l4WLGgoDE4j6Hwbp+JEsIrbbysWoR+A85NCheGrWQSa8ZXFZMplfN1S5urwcAAAMdklEQVR42uzba2+iQBTG8YfW4qU3QSkogncrotaqe77/R9vdmE0dmBkxKaTOnt9r3v1zIDkz4Jw7mE0sdpsmRxtSzq5WJ3bL5vsZstxtQOz2jTJp2yNiZnh18SXkcTXHxsE/a+5qko2Pk/uYmEn2ONkTM4uFv47EDDP1ASAiZpoEwJqYcVYAHoiZJwR4NWGiJXyPmHlq/Ik10wopse+0GPe7/VpMRcS1P8+OF1REED12++9Dj4ppwCL2bYbbDk6aH6tLVZdNnHQOo0tVX0KcOFaNCuGw32c1wRl3N9elOrg4k65I7Wnp4Ey44bCVevQh6qiHK+pA5L+SymKNjKTHYauTIE9V69FFzpbkIgc5aYPDVuUDMo/K05eiZe8cSKQ9DluNd0i5d5Q39CH1THlzG1IJh63E/B5ygyfK6q0h50wpx4LChsNW4QCVLmX1obKjrA1UQg5bgbkLlU6PRF4bKm5uZFMoRRy2fF2o1UgUQe2BRFMXShaHLd8MagcSJVD7JNEz1ByPw5bN86G2JlEINfeJBDtoDDls2WJouB4JHGgsSHCExjuHLdsIOkHm2EVnQ4I3aPQ5bNnuoDO/ImxEgiY0Xjls2RbQqdM5DzojEqyh8cxhy9aCRodEzeLTTRNoRBy2ZPpYKYksqNkkWkIj4LClO0Ctq90o6neKG6iFvKAomz7AtPj6ETXKaEPphcNWILxi87eDysCjjBeoOAGHrUANCu6CslY+FMaU1bChsOTTnUpYkPugvCXkJpQ3htygzmEr0XqDzLFHed4MMs2AJLaQcYZ8g6IisY28MCCZRog8e1X8XeBHfJmtMvEa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);
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
`
