import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { INavButtonProps } from '../../types/inavBar'

import Button from '@mui/material/Button';
import NewFeatureFlag from '../General/NewFeatureFlag';
import HomeIcon from '@mui/icons-material/Home';

const StyledNavButton = styled(Button)( ({theme}) => ({
    color: theme.palette.secondary.main,
    fontWeight: '600',
    textTransform: 'capitalize',
    width: '100%',
    padding: '9px 24px',
    display: 'inline-flex',
    position: 'relative',
    justifyContent: 'inherit',
    alignItems: 'center',
    borderRadius: '8px',
    fontSize: '0.875rem',
    '&:hover': {
        background: theme.palette.secondary.light
    }
}))

// const useStyles = makeStyles({
//     root: {
//         color: 'rgb(209, 213, 219)',
//         fontWeight: '600',
//         textTransform: 'capitalize',
//         width: '100%',
//         padding: '9px 24px',
//         display: 'inline-flex',
//         position: 'relative',
//         justifyContent: 'inherit',
//         alignItems: 'center',
//         borderRadius: '8px',
//         fontSize: '0.875rem'
//     },
//     hover:{
//         '&:hover': {
//             background: 'rgba(255, 255, 255, 0.08)'
//         }
//     }
// })

const NavButton: React.FC <INavButtonProps> = ( props ) => {
    return (
        <>
            {props.isNew ? <StyledNavButton startIcon={<HomeIcon/>} endIcon={<NewFeatureFlag/>}>
                {props.title}
                </StyledNavButton> : <StyledNavButton startIcon={<HomeIcon/>}>
                {props.title}
                </StyledNavButton>
            }
        </>
    )
}

export default NavButton