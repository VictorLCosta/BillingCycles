import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css"

import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configStore from "./store/storeConfig";

const store = configStore()

const root = ReactDOM.createRoot(
    document.getElementById('root')!
)

root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)