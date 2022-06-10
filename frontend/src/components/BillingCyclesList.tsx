import { useDispatch, useSelector } from "react-redux"
import * as billingCyclesActionCreators from '../store/actionCreators/billingCyclesActions'
import { bindActionCreators } from "redux"
import { State } from '../store/storeConfig'
import { useEffect } from "react"

const BillingCyclesList = () => {
    const dispatch = useDispatch()
    const { getList, showUpdate, remove } = bindActionCreators(billingCyclesActionCreators, dispatch)
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
                <td>
                    <button className="btn btn-warning" onClick={() => showUpdate(e)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => remove(e.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {getRows(state.list)}
            </tbody>
        </table>
    )
}

export default BillingCyclesList
