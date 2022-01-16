import { createAction } from 'redux-actions';
import { INavBar } from '../../types/InavBar'

enum Type {
    GET_NAV_BAR_DATA = "GET_NAV_BAR_DATA"
}

const getNavBarData = createAction(Type.GET_NAV_BAR_DATA);


export const NavBarActions = {
    Type,
    getNavBarData
}

export type NavBarActions = Omit<typeof NavBarActions, 'Type'>;