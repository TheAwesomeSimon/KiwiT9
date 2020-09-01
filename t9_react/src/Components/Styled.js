import styled from 'styled-components'

export const AppDiv = styled.div`
    width: 100vw;
    text-align: center;
`;

export const CenterDiv = styled.div`
    
`;

export const InlineDiv = styled.div`
    display: inline-flex;
`;

export const TextFieldWrapper = styled.div`
    position: relative;
`;

export const BigDiv = styled.div`
    display: block;
    overflow: scroll;
`;

export const SmallDiv = styled.div`
    height: 55vh;
    display: block;
    overflow:hidden;
`;

export const Wrapper = styled.div`
    margin: 3px;
    border: 2px solid grey;
    width: 40vw;
    border-radius: 10px;
    height: 63vh;
    overflow: scroll;
`;

export const Svg = styled.svg`
    position: static;
    margin-top: 0.2vh;
    margin-right: 20px;
    fill: black;
    min-height:30px;
    min-width:30px;
    width: 2%;
    height: 2%;
    float: right;
    &:hover {
        fill: grey;
        cursor: pointer;
    }
`;