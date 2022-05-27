import MenuItem from "./MenuItem"
import MenuTree from "./MenuTree"

const Menu = (props: any) => {
    return (
        <>
            {/*Sidebar menu*/}
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <MenuItem path="#" label="Dashboard" icon="tachometer-alt"/>
                        <MenuTree label="Cadastro" icon="edit">
                            <MenuItem label="Ciclo de Pagamentos" path="billingCycles" icon="dollar-sign"/>
                        </MenuTree>
                    </ul>
                </nav>
            </div>
            {/* /.Sidebar-menu */}
        </>
    )
}

export default Menu