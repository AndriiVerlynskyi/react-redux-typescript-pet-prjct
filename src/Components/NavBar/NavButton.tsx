import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { INavButtonProps } from '../../types/InavBar';

import Button from '@mui/material/Button';
import NewFeatureFlag from '../General/NewFeatureFlag';
import HomeIcon from '@mui/icons-material/Home';

export const StyledNavButton = styled(Button)( ({theme}) => ({
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

const NavButton: React.FC <INavButtonProps> = ({ navButtonItem }) => {
    return (
        <>
            {
                navButtonItem.isNew ? 
                    <StyledNavButton startIcon={<HomeIcon/>} endIcon={<NewFeatureFlag/>}>
                        {navButtonItem.title}
                    </StyledNavButton> : 
                    <StyledNavButton startIcon={<HomeIcon/>}>
                        {navButtonItem.title}
                    </StyledNavButton>
            }

        </>
    )
}

export default NavButton