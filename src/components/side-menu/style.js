import styled from 'styled-components';

const SideMenuContainer = styled.div`
    box-sizing: border-box;
    width:280px;
    background: #FFFFFF;
    box-shadow: 2px 0px 8px -2px rgba(28, 54, 84, 0.2);
    margin-top:-70px;
    padding-top:106px;
    padding-bottom:80px;

    .company-logo {
        padding:10px 24px;
    }
    .menu {
        padding-top:50px;
    }
    ul {
        list-style-type:none;
        margin:0;
        padding:0;
    }
    li a {
        display:block;
        text-decoration: none;
        padding: 11px 0px 11px 50px;
        color:#0B73DA;
    }
    li a:hover {
        background: rgba(23, 115, 207, 0.15);
    }
    .selected {
        background: rgba(23, 115, 207, 0.15);
        border-left: solid 5px #0B73DA;
    }   
`
export default SideMenuContainer;