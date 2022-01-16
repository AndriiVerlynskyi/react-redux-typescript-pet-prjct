import { handleActions } from 'redux-actions';
import { INavBar } from '../../types/InavBar';
import { NavBarActions } from '../actions';

const initialState = null;

export const navBarReducer = handleActions<INavBar | null, INavBar>({
    [NavBarActions.Type.GET_NAV_BAR_DATA]: (state, action) => action.payload,
}, initialState)