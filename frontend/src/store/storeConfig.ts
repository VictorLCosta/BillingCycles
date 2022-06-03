import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import dashboardReducers from './reducers/dashboardReducers';
import promiseMiddleware from 'redux-promise';
import tabReducers from "./reducers/tabReducers";
import billingCyclesReducers from "./reducers/billingCyclesReducers";

const rootReducer = combineReducers({
    dashboard: dashboardReducers,
    tab: tabReducers,
    billingCycles: billingCyclesReducers
})

function configStore () {
    const middlewares = [thunk, promiseMiddleware]

    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
}

export default configStore

export type State = ReturnType<typeof rootReducer>