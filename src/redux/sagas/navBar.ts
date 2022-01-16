import { AxiosResponse } from 'axios';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import { getNavBarData } from './api/navBarApi';
import { Action } from "redux-actions";
import { INavBar } from "../../types/InavBar";
import { NavBarActions } from '../actions';



function* navBarWorker (action: Action<INavBar>) {
    try{
        const response : AxiosResponse<INavBar> = yield call(getNavBarData, action.payload)

        yield put(NavBarActions.getNavBarDataSuccess({
            navBarData: response.payload
        }) as INavBar)
    } catch (error) {
        console.error(error)
    }
}

export default function* watchNavBar() {
    yield takeLatest(NavBarActions.Type.GET_NAV_BAR_DATA, navBarWorker)
}