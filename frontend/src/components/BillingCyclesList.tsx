import { useDispatch, useSelector } from "react-redux"
import * as billingCyclesActionCreators from '../store/actionCreators/billingCyclesActions'
import { bindActionCreators } from "redux"
import { State } from '../store/storeConfig'
import { useEffect } from "react"

const BillingCyclesList = () => {
    const dispatch = useDispatch()
    const { getList } = bindActionCreators(billingCyclesActionCreators, dispatch)
    const state = useSelector((state: State) => state.billingCycles)

    useEffect(() => {
        getList()
    }, [window.onload])

    function getRows(list: any)
    {
        var rows = list.map((e: any, i: any) => (
            <tr key={i}>
                <td>{e.name}</td>
                <td>{e.month}</td>
                <td>{e.year}</td>
            </tr>
        )) || []

        return rows
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Mês</th>
                    <th>Ano</th>
                </tr>
            </thead>
            <tbody>
                {getRows(state.list)}
            </tbody>
        </table>
    )
}

export default BillingCyclesList
