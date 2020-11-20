import React from 'react';
import Container from './style';
import Header from '../header';
import SideMenu from '../side-menu';

const Layout = ({children}) => (
    <React.Fragment>
        <Header />
        <Container>
            <SideMenu />
            <div className="main-column">
               {children}
            </div>
        </Container>
    </React.Fragment>
)
    
export default Layout;