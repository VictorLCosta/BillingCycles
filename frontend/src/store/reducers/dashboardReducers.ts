interface ISummary {
    credit: number,
    debt: number
}

type DashboardAction = {
    type: string,
    payload: any
}

const initialState: ISummary = {
    credit: 0,
    debt: 0
}

const dashboardReducers = (state = initialState, action: DashboardAction) => {
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return {
                ...state,
                credit: action.payload.data.credit,
                debt: action.payload.data.debt
            }
        default:
            return {
                ...state
            }
    }
}

export default dashboardReducers