import '../common/template/dependencies'

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'

const App = (props: any) => {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
        </div>
    )
}

export default App