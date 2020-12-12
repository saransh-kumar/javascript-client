import styled, {css} from 'styled-components';

const Border = styled.div`
border: 1px solid black;
padding: 2px;
margin:5%;

${props =>
    props.primary &&
    css`
    border: none;
    padding: 2px;
    margin:5%;
    margin-bottom: 0%;
    `};
`;


const Input = styled.input`
width: 99%;
height:32px;

${props =>
    props.Brown &&
    css`
    width:99%;
    height:32px;
    border:1px solid brown;
    `};
${props =>
    props.Red &&
    css`
    width:99%;
    height:32px;
    border:1px solid brown;
    `};
`;

const Div = styled.image`
display: flex;
justify-content: center;
align-items: center;
`
const Error = styled.p`
color:red;
margin-bottom:20px;
`;

export { Border, Input, Error, Div };