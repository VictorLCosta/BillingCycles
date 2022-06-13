import Grid from './../common/layout/Grid';
import { Field } from 'redux-form';
import Input from '../common/form/Input';

const CreditList = (props: any) => {

    function renderRows () {
        const list = props.list || []
        return list.map((el: any, i: any) => (
            <tr>
                <td><Field name={`credits[${i}].name`} component={Input} type="text" readOnly={props.readOnly}/></td>
                <td><Field name={`credits[${i}].value`} component={Input} type="number" readOnly={props.readOnly}/></td>
            </tr>
        ))
    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>Créditos</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

export default CreditList