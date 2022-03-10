import React, { useState } from 'react';
import { INavButtonProps } from '../../types/InavBar';
import { NavLink } from 'react-router-dom';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledNavButton } from './NavButton';
import Box from '@mui/system/Box';


const NavButtonWithCollapse: React.FC <INavButtonProps> = ({ navButtonItem }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [endIcon, setEndIcon] = useState(<ChevronRightIcon sx={{position:'absolute', right:'24px', top:'15px'}}/>)

  return (
      <Box sx={{width: '100%'}}>
        <StyledNavButton 
          sx={{position:'relative'}}  
          startIcon={<HomeIcon/>}
          endIcon={endIcon}
          onClick={() => setIsExpanded(!isExpanded)}
        >
            {navButtonItem.title}
        </StyledNavButton>
        <Collapse in={isExpanded} unmountOnExit>
          <List>
            {navButtonItem.dropdownElementsList.map( (dropDownItemTitle : string) => {
                return(
                  <ListItem key={dropDownItemTitle} sx={{padding:'0px'}}>
                    <StyledNavButton sx={{padding:'9px 24px 9px 40px', width:'216px'}}>
                      {dropDownItemTitle}
                    </StyledNavButton>
                  </ListItem>
                )
            })}
          </List>
        </Collapse>
      </Box>
  );
};

export default NavButtonWithCollapse;
