import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks';
import { NavBarActions } from '../../redux/actions';
import { navBarState } from '../../types/InavBar';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import NavList from './NavList';


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
        dispatch(NavBarActions.requestNavBarData())
    }, [])

    const navBarData = useSelector( (state : navBarState) => state.navBarData );
    console.log(navBarData)

    return (
        <StyledNavBarContainer>
            <Divider/>
            <Box display={{xs: 'none', sm: 'none', md: 'block', lg:'block', xl:'block'}}>
                { navBarData.navItemsList.map( navItem => {
                   console.log('the navItem is:', navItem)
                   return <NavList navItem={navItem}/>
                })}
            </Box>
        </StyledNavBarContainer>
    )
}

export default NavBar
