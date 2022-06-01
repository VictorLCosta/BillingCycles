interface TabHeaderProps {
    icon: string,
    label: string
    target: string
    first: boolean
}

const TabHeader = (props: TabHeaderProps) => {
    return (
        <li className="nav-item" role="presentation">
            <button className={`nav-link ${props.first ? 'active': ''}`} data-bs-toogle="tab" data-bs-target={props.target} type="button" role="tab" aria-selected={`${props.first}`}>
                <i className={`fas fa-${props.icon}`}></i> {props.label}
            </button>
        </li>
    )
}

export default TabHeader