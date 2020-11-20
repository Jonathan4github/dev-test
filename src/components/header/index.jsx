import React from 'react';
import {Link} from 'react-router-dom';
import Head from './style';

const Header = () => (
    <Head>
        <Link className="logo-container">Dev Test</Link>
        <nav>
            <Link className="option"></Link>
            <Link className="option"></Link>
            <Link className="option"></Link>
        </nav>
    </Head>
)

export default Header;