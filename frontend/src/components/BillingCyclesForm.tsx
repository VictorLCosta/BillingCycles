import { Field, reduxForm } from "redux-form"
import FormGroup from "../common/form/FormGroup"

import * as billingActionCreators from "../store/actionCreators/billingCyclesActions"
import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"

const BillingCyclesForm = (props: any) => {
    const { handleSubmit } = props

    const dispatch = useDispatch()
    const { init } = bindActionCreators(billingActionCreators, dispatch)

    return (
        <form role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Field name="name" component={FormGroup} label="Nome" cols="12 4" placeholder="Informe o nome"/>
                <Field name="month" component={FormGroup} label="Mês" cols="12 4" placeholder="Informe o mês" type="number"/>
                <Field name="year" component={FormGroup} label="Ano" cols="12 4" placeholder="Informe o ano" type="number"/>
            </div>
            <div className="box-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary ml-2" onClick={() => init()}>Voltar</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCyclesForm)