import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import dashboardReducers from './reducers/dashboardReducers';
import tabReducers from "./reducers/tabReducers";
import billingCyclesReducers from "./reducers/billingCyclesReducers";

import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';

import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
    dashboard: dashboardReducers,
    tab: tabReducers,
    billingCycles: billingCyclesReducers,
    form: formReducer,
    toastr: toastrReducer
})

function configStore () {
    const middlewares = [thunk, promiseMiddleware]

    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
}

export default configStore

export type State = ReturnType<typeof rootReducer>