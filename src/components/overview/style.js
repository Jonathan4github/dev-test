import Styled, {css} from 'styled-components';

const Container = Styled.div`
  padding:12px;
  font-family: Ruda;
  border-radius:3px;
  ${props =>
    props.imageBackground &&
    css`
    background:${props.color} url(${props.imageBackground}) no-repeat center;
    border: 2px solid ${props.color};
   `}
   ${props =>
    props.color !== '#f7bc29'  &&
    css`
    color:  #FFFFFF;;
   `}
  background-size: auto;  
  font-weight:700;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.01em;

  .title, div > span {
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.01em;
  }

  div{
    margin:8px;
    display:flex;
    justify-content:space-between;
    text-align:right;
  }
  
}
`

export default Container;