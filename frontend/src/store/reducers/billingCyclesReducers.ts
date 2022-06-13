const initialState = {
    list: [],
    selectedCycle: {}
}

type Action = {
    type: string,
    payload: any
}

const billingCyclesReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case "BILLING_CYCLES_FETCHED":
            return {
                ...state,
                list: action.payload.data
            }
        
        case "BILLING_CYCLE_SELECTED":
            return {
                ...state,
                list: action.payload.data
            }
    
        default:
            return {
                ...state
            }
    }
}

export default billingCyclesReducers