import { put, call, select, takeLatest } from 'redux-saga/effects';
import { getNavBarData } from './api/navBarApi';
import { Action } from "redux-actions";
import { INavBar } from "../../types/InavBar";
import { NavBarActions } from '../actions';
import { navBarUrl } from "../../router/routes";


function* navBarWorker (action: Action<INavBar>) {
    try{
        const { data } = yield call(getNavBarData, navBarUrl)

        yield put (NavBarActions.recieveNavBarData(data))
    } catch (err) {
        console.error(err)
    }
}

export default function* watchNavBar() {
    yield takeLatest(NavBarActions.Type.REQUEST_NAV_BAR_DATA, navBarWorker)
}