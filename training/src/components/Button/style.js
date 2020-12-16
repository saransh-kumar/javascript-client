import styled, { css } from 'styled-components';

const ButStyle = styled.button`
    margin: 5px;
    height: 30px;
    border-radius:5px;
    border-color: 1px solid black;
    ${props => props.active && css`
        background-color: green;
    `}
`

export { ButStyle };