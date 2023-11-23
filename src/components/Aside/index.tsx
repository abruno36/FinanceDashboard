import React from 'react';
import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
   
}  from './styles';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,

} from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
            <LogImg src={logoImg} alt="Logo Finance Dashboard" />
                <Title>Finance Dashboard</Title> 
            </Header>
            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
            
        </Container>
    )
}
export default Aside;