import React from 'react';
import {Link} from 'react-router-dom';
import SideMenuContainer from './style';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import rectangle from '../../assets/rectangle.svg';
import targets from '../../assets/targets.svg';

const SideMenu = () => (
    <SideMenuContainer>
        <div className="company-logo"><Logo /></div>
        <ul className="menu">
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li><Link to="/"><img src={rectangle} /></Link></li>
        <li className="selected"><Link to="/"><i className="icon"><img src={targets} /></i> Target</Link></li>
        </ul>
    </SideMenuContainer>
)

export default SideMenu;