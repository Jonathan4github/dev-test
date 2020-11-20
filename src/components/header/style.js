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
    z-index:1;

    .logo-container {
        font-family: Ruda;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        color: #0B50DA;
        margin-left:34px;
    }
    nav{
        margin-right:75px;
    }
    nav > ul {
        list-style-type: none;
        margin: 0;
        display:flex;
        flex-direction: row;
        align-items: center;
    }
    .user-profile-menu {
        display:flex;
        alignItems: center;
        padding-left:18px;
    }
    .option{
        padding: 24px 10px;
        color: #243242;
        font-size: 13px;
        line-height: 15px;
        font-weight:500;
    }
    p {
        margin:2px;
        font-size: 11px;
        line-height: 13px;
        font-weight:700;
        color:#5C6370;
    }
    a {
        text-decoration:none;
    } 
    .avatar{
        height:36px;
        width:36px;
        border-radius:50%;
    }
    .caret{
        padding-left:16px;
    }
    span{
        padding-left:8px;
    }
` 

export default Head;
