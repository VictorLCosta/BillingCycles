import { Link } from 'react-router-dom'
 
interface MenuItemProps {
    path: string,
    label: string,
    icon: string
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <li className="nav-item">
            <Link to={props.path} className="nav-link">
                <i className={`nav-icon fas fa-${props.icon}`} />
                <p>
                    {props.label}
                </p>
            </Link>
        </li>
    )
}

export default MenuItem