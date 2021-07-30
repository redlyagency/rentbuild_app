import React from 'react';
import {
    NavbarTemplateWrapper,
    NavbarLogo,
} from './navbarTemplate.style';

class NavbarTemplate extends React.Component {
    render() {
        return (
            <NavbarTemplateWrapper>
                <NavbarLogo />
            </NavbarTemplateWrapper>
        )
    }
}

export default NavbarTemplate;