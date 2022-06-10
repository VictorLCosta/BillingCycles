import axios from 'axios'
import { Dispatch } from 'redux'

import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from './tabActions'

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

export const create = async (values: any) => {
    const response = await axios.post(`${BASE_URL}/BillingCycle`, values)

    if(response.status === 201) {
        toastr.success('Sucesso', 'Ciclo criado com sucesso')
        return (dispatch: any) => {
            dispatch(getList())
            dispatch(selectTab('tabList'))
            dispatch(showTabs('tabList', 'tabCreate'))
            dispatch(resetForm('billingCycleForm'))
        }
    } else {
        console.log(response)
    }

}

export const showUpdate = (billingCycle: any) => {
    return (dispatch: any) => {
        dispatch(showTabs('tabUpdate'))
        dispatch(selectTab('tabUpdate'))
        dispatch(initialize('billingCycleForm', billingCycle))
    }
}

export const remove = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/BillingCycle`, { params: { id } })

    if(response.status === 200) {
        toastr.success('Sucesso', 'Ciclo removido com sucesso')
        return (dispatch: any) => {
            dispatch(getList())
        }
    } else {
        console.log(response)
    }
}

export const init = () => {
    return (dispatch: any) => {
        dispatch(showTabs('tabList', 'tabCreate'))
        dispatch(selectTab('tabList'))
        dispatch(getList())
        dispatch(initialize('billingCycleForm', {}))
    }
}