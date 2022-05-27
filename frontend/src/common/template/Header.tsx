import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props: any) => {
    return (
        <header className="main-header navbar navbar-expand navbar-light navbar-cyan">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link sidebar-toggle text-light" data-toggle="push-menu" role="button" href="#">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header