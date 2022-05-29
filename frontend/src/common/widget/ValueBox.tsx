import Grid from "../layout/Grid"

interface ValueBoxProps {
    cols: string,
    color: string,
    value: string,
    text: string,
    icon: string
}

const ValueBox = (props: ValueBoxProps) => {
    return (
        <Grid cols={props.cols}>
            <div className={`small-box bg-${props.color}`}>
                <div className="inner">
                    <h3>{props.value}</h3>
                    <p>{props.text}</p>
                </div>
                <div className="icon">
                    <i className={`fas fa-${props.icon}`}></i>
                </div>
            </div>
        </Grid>
    )
}

export default ValueBox