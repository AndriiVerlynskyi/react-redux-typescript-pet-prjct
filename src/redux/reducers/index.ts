import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { navBarReducer } from '../reducers/navBarReducer'

const rootReducer = combineReducers({
    router: routerReducer,
    navBarData: navBarReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer