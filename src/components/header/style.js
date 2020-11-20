import styled from 'styled-components';

const Head = styled.div`
    display:flex;
    justify-content:space-between;
    height: 70px;
    background: #FFFFFF;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 2px 8px -2px rgba(28, 54, 84, 0.1);
    position: fixed;
    left: 0px;
    top: 0px;
    width:100%;

    .logo-container {
        font-family: Ruda;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #0B50DA;
        margin-left:34px;
    }
    .option{
        padding: 24px 30px;
        color: #243242;
        font-family: Museo Sans 500;
        font-size: 13px;
        line-height: 15px;
    }
    a {
        text-decoration:none;
    } 
` 

export default Head;
