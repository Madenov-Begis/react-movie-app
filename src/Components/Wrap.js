import styled from "styled-components"

export const Wrap = styled.div`
    position: relative;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    &:after{
        content: "";
        position: absolute;
        background: linear-gradient(to bottom right, rgba(31.5, 31.5, 52.5, .7), rgba(31.5, 31.5, 52.5, 0.64));
        z-index: 0;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
    }
`