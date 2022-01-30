import { handleActions, ReducerMap } from 'redux-actions';
import { INavBar, navBarState } from '../../types/InavBar';
import { NavBarActions } from '../actions';

// const initialState: INavBar= {
//     customerTier: '',
//     navItemsList: [{
//         navTitle: '',
//         listElements: [{
//             title: '',
//             icon: '',
//             isNew: false
//         }]
//     }]
// }

const initialState = null
// export const navBarReducer = handleActions <INavBar | null, INavBar> ({

export const navBarReducer = handleActions <INavBar | null, INavBar>({
    [NavBarActions.Type.RECEIVE_NAV_BAR_DATA] : ( state, action ) => action.payload
}, initialState);