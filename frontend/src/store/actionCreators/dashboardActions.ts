import axios from 'axios'
import { Dispatch } from 'redux'

const BASE_URL = 'https://localhost:5001/api'

export const getSummary = () => {
    const request = axios.get(`${BASE_URL}/BillingCycle/summary`)

    return (dispatch: Dispatch) => {
        dispatch({
            type: "BILLING_SUMMARY_FETCHED",
            payload: request
        })
    }
}