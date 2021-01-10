import styled, {css} from 'styled-components';

const Div = styled.div`
    color: red;
    margin-top: 0%;
    margin-bottom: 0%;
`
const P = styled.p`
    margin-top:0%;
    ${props => props.primary && css`
    margin-left: 5%;
  `}
`
export { Div, P }