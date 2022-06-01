interface ITab {
    selected: string
}

type TabAction = {
    type: string,
    payload: string
}

const initialState: ITab = {
    selected: ''
}

const tabReducers = (state = initialState, action: TabAction) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return {
                ...state,
                selected: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default tabReducers