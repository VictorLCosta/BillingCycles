import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import * as dasboardActionCreators from '../../store/actionCreators/dashboardActions'
import { State } from "../../store/storeConfig"

import Row from "../../common/layout/Row"
import Content from "../../common/template/Content"
import ContentHeader from "../../common/template/ContentHeader"

//widgets
import ValueBox from "../../common/widget/ValueBox"

const Dashboard = (props: any) => {
    const dispatch = useDispatch()
    const { getSummary } = bindActionCreators(dasboardActionCreators, dispatch)
    const state = useSelector((state: State) => state.dashboard)

    useEffect(() => {
        getSummary()
    }, [window.onload])

    return (
        <>
            <ContentHeader title="Dashboard" small="Versão 1.0"/>
            <Content>
                <Row>
                    <ValueBox color="green" cols="12 4" icon="university" value={`R$ ${state.credit}`} text="Total de Créditos" />
                    <ValueBox color="red" cols="12 4" icon="credit-card" value={`R$ ${state.debt}`} text="Total de Débitos" />
                    <ValueBox color="blue" cols="12 4" icon="money-bill" value={`R$ ${state.credit - state.debt}`} text="Valor Consolidado" />
                </Row>
            </Content>
        </>
    )
}

export default Dashboard