import { AxiosResponse, AxiosError, AxiosPromise } from 'axios';
import { put, call, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { getNavBarData } from './api/navBarApi';
import { Action } from "redux-actions";
import { INavBar } from "../../types/InavBar";
import { NavBarActions } from '../actions';
import { navBarUrl } from "../../router/routes";


function* navBarWorker (action: Action<INavBar>) {
    try{
        yield put ({ type: NavBarActions.requestNavBarData })
        const { data } = yield call(getNavBarData, navBarUrl)
        console.log(data)

        yield put ({ type: NavBarActions.recieveNavBarData, payload: { navBarData: data} })
    } catch (err) {
        console.error(err)
    }
}

export default function* watchNavBar() {
    yield takeLatest(NavBarActions.Type.REQUEST_NAV_BAR_DATA, navBarWorker)
    yield takeEvery(NavBarActions.Type.RECEIVE_NAV_BAR_DATA, navBarWorker)
}