import styled from 'styled-components'
import levelOne from 'img/level-one.jpeg'
import wood from 'img/wood.jpg'

export const Background = styled.div`
    display: flex;
    background-image: url(${wood});
    height: 100vh;
    width: 100vw;
    background-size: contain;
    background-color: #FDFDDB;
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    display: grid;
    height: 100vh;
    width: 100vw;
    max-width: ${(props) => props.maxWidth ? `${props.maxWidth}px` : 'auto'};
    border-radius: 24px;
    overflow: hidden;
`;


export const Scene = styled.div`
    padding-bottom: 66.25%;
    background-size: cover;
    background-image: url(${levelOne});
    object-fit: cover;
`;
