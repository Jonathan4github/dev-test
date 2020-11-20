import Styled from 'styled-components';
import caret from '../../assets/caret.svg';

const Container = Styled.div`
    display:flex;
    flex-grow:1;
    flex-direction: column;
    font-family: Ruda;

    .targets-section > p {
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.01em;
        color: #000000;
    }
    input {
        padding:8px;
        border: 1px solid #D5D7DD;
        border-radius: 3px;
        width:25%;
    }
    button {
        border:none;
        border-radius:5px;
        width: 89px;
        padding: 8px;
        background: rgba(11, 115, 218, 0.3);
        margin-left:16px;
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.02em;
        color: #1773CF;
        cursor:pointer;
    }
    .filter-section > span {
        font-weight: 700;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: -0.01em;
        color: #EF5252;
        margin-left:16px;
        cursor:pointer;
    }
    select {
        padding:8px;
        padding-right:30px;
        border:none;
        background: rgba(28, 54, 84, 0.3);
        border-radius:3px;
        margin-left:16px;
        cursor:pointer;

        /* replace default arrow*/
        appearance:none;
        -webkit-appearance:none;
        -moz-appearance:none;

        background: rgba(28, 54, 84, 0.3) url(${caret}) no-repeat;
        background-position:right 10px top 50%;
    }
    select:focus, button:focus, input:focus {
        outline:none;
    }
    .overview-section{
        margin-bottom:48px;
        display:grid;
        grid-template-columns: 370px auto auto;
        grid-gap: 5px;
    }
    
}
`;

export default Container;