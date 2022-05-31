const Tabs = (props: any) => {
    return (
        <div className="nav-tabs-custom" role="tablist">
            {props.children}
        </div>
    )
}

export default Tabs