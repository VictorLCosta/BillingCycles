import '../common/template/dependencies'

import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'
import Footer from '../common/template/Footer'
import Routes from './../routes/Routes';
import Messages from '../common/msg/Messages';

const App = (props: any) => {
    return (
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <div className="content-wrapper px-4 py-2">
                <Routes/>
            </div>
            <Footer/>
            <Messages/>
        </div>
    )
}

export default App