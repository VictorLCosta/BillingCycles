const TabsHeader = (props: any) => {
    return (
        <ul className="nav nav-tabs">
            {props.children}
        </ul>
    )
}

export default TabsHeader