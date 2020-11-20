import styled, {css} from 'styled-components';

const Container = styled.div`
  background: #FFFFFF;
  display:flex;
  flex-direction: column;
  padding:12px;
  font-family: Ruda;
  ${props =>
    props.color &&
    css`
      border: 2px solid ${props.color|| '#EF5252'};`
  }
  box-sizing: border-box;
  box-shadow: 2px 2px 8px -2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  .card-body {
    padding-top:34px;
    display:grid;
    grid-template-columns: auto auto auto;
    grid-gap: 12px;    
  }
  .card-body > span {
    font-weight:300;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
  }
  .card-body > span > p {
    color: #243242;
    font-size: 13px;
    line-height: 15px;
    font-weight:700;
  }
  .card-footer {
    display:flex;
    justify-content:space-between;
    padding:6px;
  }
  .card-footer > span {
    font-family: Ruda;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.01em;
    text-align: left;
    color:#1773CF;
  }
`
const Heading = styled.div`
  display:flex;
  flex-direction: column;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #243242;
  font-weight:700;
  height:30px;

  .location{
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #1773CF;
    padding-top:4px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .location > i {
    padding-right:8px;
  }
}
`
export {Heading, Container};