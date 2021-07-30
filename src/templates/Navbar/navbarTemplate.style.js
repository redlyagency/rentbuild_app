import styled from "styled-components";

import logo from '../../assets/svg/logo.svg';

export const NavbarTemplateWrapper = styled.div`
    backdrop-filter: blur(50px);
    width: 100%;
    height: 65px;
    box-shadow: 0px 2px 1px 1px orange;
`;
export const NavbarLogo = styled.div`
    background-image: url( ${logo} );
    width: 150px;
    height: 65px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: 100px;
`;