const Menu = (props: any) => {
    return (
        <>
            {/*Sidebar menu*/}
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="tree" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    Widgets
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* /.Sidebar-menu */}
        </>
    )
}

export default Menu