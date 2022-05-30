import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({

})

function configStore () {
    return createStore(rootReducer, composeWithDevTools())
}

export default configStore