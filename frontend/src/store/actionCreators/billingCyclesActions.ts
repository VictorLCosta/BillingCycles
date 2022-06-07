import axios from 'axios'
import { Dispatch } from 'redux'

import { toastr } from 'react-redux-toastr'

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
    axios.post(`${BASE_URL}/BillingCycle`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Ciclo criado com sucesso')
        })
        .catch(e => {
            const errors = Object.values(e.response.data).map((e: any) => e[0])

            errors.forEach(error => toastr.error('Erro', error))
        })
    
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TEMP'
        })
    }
}