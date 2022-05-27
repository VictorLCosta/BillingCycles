import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Menu from "./Menu"

const SideBar = (props: any) => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/#/" className="brand-link logo-switch">
                <span className="mr-2">
                    <FontAwesomeIcon icon={faMoneyBill1} />
                </span>
                <span className="brand-text font-weight-light">My Money</span>
            </a>

            <Menu/>

        </aside>
    )
}

export default SideBar