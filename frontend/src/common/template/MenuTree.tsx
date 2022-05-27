interface MenuTreeProps {
    label: string,
    icon: string,
    children?: any
}

const MenuTree = (props: MenuTreeProps) => {
    return (
        <li className="nav-item">
            <a href="#" className="nav-link">
                <i className={`nav-icon fas fa-${props.icon}`}></i>
                <p>
                    {props.label}
                    <i className="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul className="nav nav-treeview" style={{display: 'none'}}>
                {props.children}
            </ul>
        </li>
    )
}

export default MenuTree