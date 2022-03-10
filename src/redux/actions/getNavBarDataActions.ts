import { createAction } from 'redux-actions';

enum Type {
    REQUEST_NAV_BAR_DATA = "REQUEST_NAV_BAR_DATA",
    RECEIVE_NAV_BAR_DATA = "RECEIVE_NAV_BAR_DATA"
}

const requestNavBarData = createAction(Type.REQUEST_NAV_BAR_DATA);
const recieveNavBarData = createAction(Type.RECEIVE_NAV_BAR_DATA)


export const NavBarActions = {
    Type,

    requestNavBarData,
    recieveNavBarData
}

export type NavBarActions = Omit<typeof NavBarActions, 'Type'>;
