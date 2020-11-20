import styled, {css} from 'styled-components';

const Container = styled.div`
    background:#F2F2F2;
    border-radius:13px;
    height:12px;
    width:100%;
    padding:0;
    margin:0;
    div{
        ${props =>
            props.color &&
            css`
            background: ${props.color|| 'transparent'};
            width: ${props.width || 0}%;
            `
          }
        border-radius:13px;
        height:12px;
    }
`

export default Container;