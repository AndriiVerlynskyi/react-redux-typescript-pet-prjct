import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks';
import { NavBarActions } from '../../redux/actions';
import { RootState } from '../../redux/store';

import { createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider';
import NavList from './NavList';

// const thinDarkScrollBar = {
//     scrollbarWidth: 'thin',
//     scrollbarColor: '#B7B7B7 transparent',
//     '&::-webkit-scrollbar': {
//     width: 6,
//     height: 6,
//     backgroundColor: 'transparent',
//     },
//     '&::-webkit-scrollbar-track': {
//     backgroundColor: 'transparent',
//     },
//     '&::-webkit-scrollbar-thumb': {
//     borderRadius: 6,
//     backgroundColor: '#B7B7B7',
//     minHeight: 24,
//     minWidth: 24,
//     },
//     '&::-webkit-scrollbar-thumb:focus': {
//     backgroundColor: '#adadad',
//     },
//     '&::-webkit-scrollbar-thumb:active': {
//     backgroundColor: '#adadad',
//     },
//     '&::-webkit-scrollbar-thumb:hover': {
//     backgroundColor: '#adadad',
//     },
//     '&::-webkit-scrollbar-corner': {
//     backgroundColor: 'transparent',
//     }
// }

const customScrollbarTheme = createTheme({
    components: {
        StyledNavBarContainer:{
            styleOverrides: {
                showScrollbar:{
                    overflowY: 'overlay',
                    overflowX: 'hidden'
                }
            }
        }
    }
})

const StyledNavBarContainer = styled( Container , {
    shouldForwardProp: (prop) => 
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
    name: 'StyledNavBarContainer',
    slot: 'Root',

    overridesResolver: ( props, styles ) => [
            styles.root,
            props.active && styles.showScrollbar
        ],
    })( ({ theme }) => ({
    position: 'fixed',
    width: '280px',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    // ...(theme.components?.MuiCssBaseline?.styleOverrides),
    background: 'rgb(17, 24, 39)',
    '&&': {
        padding: '0px'
    }
}))

const NavBar: React.FC = () => {

    const scrollbarIsActive = useRef({
        overflowX: 'hidden',
        overflowY: 'overlay'
    });

    console.log(scrollbarIsActive.current)

    // const [scrollBarIsActive, setScrollBarIsActive] = useState(false);
    // const [timeoutId, setTimeoutId] = useState(0);

    // console.log(scrollBarIsActive)

    // function setTimer () {
    //     setTimeoutId( () => {
    //         const timer = window.setTimeout( () => {
    //             setScrollBarIsActive( false )
    //         }, 2000)
    //         return timer
    //     })
    // };

    // function clearTimer () {
    //     window.clearTimeout(timeoutId)
    // };

    // const handleScrollBar = () => {
    //     if (!scrollBarIsActive) {
    //         setScrollBarIsActive(true)
    //     }
    //     clearTimer();
    //     setTimer();
    // }

    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(NavBarActions.requestNavBarData());
    }, []) 

    const navBarData = useSelector( (state : RootState) => state.navBarData );


    return (
        <StyledNavBarContainer>
            <Divider/>
            <Box display={{xs: 'none', sm: 'none', md: 'block', lg:'block', xl:'block'}}>
                {!!navBarData && navBarData.navItemsList.map( navItem => {
                return <NavList navItem={navItem} key={navItem.navTitle}/>
                })}
            </Box>
        </StyledNavBarContainer>
    )
}

export default NavBar
