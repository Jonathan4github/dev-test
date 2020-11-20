import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width:90%;
    font-family: Ruda;
    .tabs {
        list-style:none;
        padding:0;
        margin:0;
        display:flex;
        color:#5C6370;
        font-weight: 500;
    }
    .tabs > li {
        margin: 0 1em;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }
    .active > a {
        color:#1F3247;
        font-weight:bold;

    }
    .active:after{
        display: block;
        height: 2px;
        background-color: #1773CF;
        content: ' ';
        width: 80%;
        margin: 0 auto;
        margin-top: 13px;
    }
    .tab-body{
        background:#FFFFFF;
        flex-grow:1;
        padding:36px;
    }
`

export default Container;