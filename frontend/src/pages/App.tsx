import '../common/template/dependencies'

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'
import Footer from '../common/template/Footer'

const App = (props: any) => {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <div className="content-wrapper px-4 py-2">
                Conteudo
            </div>
            <Footer/>
        </div>
    )
}

export default App