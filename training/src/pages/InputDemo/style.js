import styled, { css } from 'styled-components';

const Div = styled.div`
margin: 20px;
    ${props => props.primary && css`
    display:flex;
    justify-content: center;
    align-items: center;
`}
`

export { Div }