interface ITab {
    selected: string,
    visible: []
}

type TabAction = {
    type: string,
    payload: any
}

const initialState: ITab = {
    selected: '',
    visible: []
}

const tabReducers = (state = initialState, action: TabAction) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return {
                ...state,
                selected: action.payload
            }

        case 'TAB_SHOWED':
            console.log(action.payload)
            return {
                ...state,
                visible: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default tabReducers