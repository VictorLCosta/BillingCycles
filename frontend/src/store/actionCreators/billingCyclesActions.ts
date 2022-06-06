import axios from 'axios'
import { Dispatch } from 'redux'

const BASE_URL = 'https://localhost:5001/api'

export const getList = () => {
    const request = axios.get(`${BASE_URL}/BillingCycle`)

    return (dispatch: Dispatch) => {
        dispatch({
            type: "BILLING_CYCLES_FETCHED",
            payload: request
        })
    }
}

export const create = (values: any) => {
    const request = axios.post(`${BASE_URL}/BillingCycle`, values)
    
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TEMP'
        })
    }
}