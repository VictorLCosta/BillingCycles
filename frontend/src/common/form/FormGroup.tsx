import Grid from "../layout/Grid"

const FormGroup = (props: any) => {
    return (
        <Grid cols={props.cols}>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <input {...props.input} type={props.type} className="form-control" placeholder={props.placeholder} readOnly={props.readOnly} />
            </div>
        </Grid>
    )
}

export default FormGroup