import React from 'react';
import { styled } from '@mui/material/styles';
import { INavItemsList } from '../../types/InavBar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import NavButton from './NavButton';

// interface NavItemsList {
//     navTitle: string,
//     listElements: {
//         title: string,
//         icon: string,
//         isNew: boolean
//     }[]
// }

const firstListNavItems :INavItemsList = {
    navTitle: 'GENERAL',
    listElements: [{
        title: 'Overview',
        icon: 'home',
        isNew: false
    },
    {
        title: 'Analytics',
        icon: 'charts',
        isNew: false
    },
    {
        title: 'Finance',
        icon: 'cirleCharts',
        isNew: false
    },
    {
        title: 'Logistics',
        icon: 'lorry',
        isNew: true
    },
    {
        title: 'Account',
        icon: 'Profile',
        isNew: false
    }
]}

const StyledListItemBtn = styled(ListItem)( ({theme}) => ({
    padding: '0px 16px',
    marginBottom: '4px',
}))

const StyledListItemTitle = styled(ListItem)( ({theme}) => ({
    background: 'none',
    color: 'rgb(107, 114, 128)',
    fontSize: '0.75rem',
    fontWeight: '700',
    lineHeight: '2.5',
    marginLeft: '32px',
    padding: '0px'
}))

const NavList: React.FC = () => {
    return (
        <List>
            <StyledListItemTitle>{firstListNavItems.navTitle}</StyledListItemTitle>
            {firstListNavItems.listElements.map( navItem => {
                    return (
                        <StyledListItemBtn key={navItem.title}>
                            <NavButton title={navItem.title} isNew={navItem.isNew}/>
                        </StyledListItemBtn>
                    )
                })
            }
        </List>
    )
}

export default NavList
