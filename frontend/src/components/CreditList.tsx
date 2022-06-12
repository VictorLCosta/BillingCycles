import Grid from './../common/layout/Grid';
import { Field } from 'redux-form';

const CreditList = (props: any) => {

    function renderRows () {
        const rows = (
            <tr>
                <td><Field name="" component="input"/></td>
                <td><Field name="" component="input"/></td>
                <td><Field name="" component="input"/></td>
            </tr>
        )

        return rows
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