const Input = (props: any) => (
    <input 
        {...props.input}
        type={props.type}
        className="form-control"
        readOnly={props.readOnly}
    />
)

export default Input