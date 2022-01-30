import React from 'react';
import { styled } from '@mui/material/styles';
import { INavItemsList, INavButtonProps } from '../../types/InavBar';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import NavButton from './NavButton';


interface INavListProps {
    navItem: INavItemsList
}

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

const NavList: React.FC <INavListProps> = (props) => {

    console.log(props)
    return (
        <List>
            <StyledListItemTitle>{props.navItem.navTitle}</StyledListItemTitle>
            {props.navItem.listElements.map( (navButtonItem : INavButtonProps) => {
                    return (
                        <StyledListItemBtn key={navButtonItem.title}>
                            <NavButton title={navButtonItem.title} isNew={navButtonItem.isNew} icon={navButtonItem.icon}/>
                        </StyledListItemBtn>
                    )
                })
            }
        </List>
    )
}

export default NavList