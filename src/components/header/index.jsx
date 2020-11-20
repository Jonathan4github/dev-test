import React from 'react';
import {Link} from 'react-router-dom';
import Head from './style';
import SettingIcon from '../../assets/setting.svg';
import NotificationIcon from '../../assets/notification.svg'
import avatar from '../../assets/user.PNG';
import caret from '../../assets/caret.svg';

const Header = () => (
    <Head>
        <Link className="logo-container">Dev Test</Link>
        <nav>
            <ul>
                <li><Link className="option"><img src={SettingIcon} alt="setting" /></Link></li>
                <li><Link className="option"><img src={NotificationIcon} alt="notification" /></Link></li>
                <li><Link className="option">
                    <div className="user-profile-menu">
                        <img className="avatar" src={avatar} alt="avater" />
                        <span>Joseph Ehikioya <p> Super Admin</p></span>
                        <img className="caret" src={caret} alt="caret" />
                    </div>
                    </Link>
                </li>
            </ul>
        </nav>
    </Head>
)

export default Header;