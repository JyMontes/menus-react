import styled  from 'styled-components';

interface props {
    height?: number;
    src?: string;
}


export const Flex = styled.div<props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ContainerPlace = styled.div<props>`
    height: calc(${props => props.height}vh);
    width: 100%;
    margin: auto;
`
export const ContainerPlaceInfo = styled.div<props>`
    width:100%;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align:center;
`
export const Container = styled.div<props>`
    height: calc(${props => props.height}vh);
    margin-bottom:20px;
    width: 100%;
    margin: auto;
    border-radius: 10px 10px 0 0;
    background: url(${props => props.src}) no-repeat;
    background-size: contain;
    background-position: center;
`

export const ImgContainer = styled.div<props>`
    width:100%;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Img = styled.div<props>`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    height: ${props => props.height}vh;
    background: url(${props => props.src}) no-repeat;
    background-position: center;
    background-size: cover;
`