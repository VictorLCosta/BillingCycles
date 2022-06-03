import axios from 'axios'
import { Dispatch } from 'redux'

const BASE_URL = 'https://localhost:5001/api'

export const getList = () => {
    const request = axios.get(`${BASE_URL}/BillingCycle/Get`)

    return (dispatch: Dispatch) => {
        dispatch({
            type: "BILLING_CYCLES_FETCHED",
            payload: request
        })
    }
}