import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks';
import { NavBarActions } from '../../redux/actions'

import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import NavList from './NavList';

// const firstListNavItems :NavItemsDetails = {
//     navTitle: 'GENERAL',
//     listElements: [{
//        title: 'Overview',
//        icon: 'home',
//        isNew: false
//     },
//     {
//         title: 'Analytics',
//         icon: 'charts',
//         isNew: false
//     },
//     {
//         title: 'Finance',
//         icon: 'cirleCharts',
//         isNew: false
//     },
//     {
//         title: 'Logistics',
//         icon: 'lorry',
//         isNew: true
//     },
//     {
//         title: 'Account',
//         icon: 'Profile',
//         isNew: false
//     }
// ]}

const StyledNavBarContainer = styled(Container)( ({theme}) => ({
    width: '280px',
    height: window.innerHeight,
    background: 'rgb(17, 24, 39)',
    '&&': {
        padding: '0px'
    }
}))

const NavBar: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(NavBarActions.getNavBarData())
    }, [])

    return (
        <StyledNavBarContainer>
            <Divider/>
            <Box display={{xs: 'none', sm: 'none', md: 'block', lg:'block', xl:'block'}}>
                <NavList/>
            </Box>
        </StyledNavBarContainer>
    )
}

export default NavBar
