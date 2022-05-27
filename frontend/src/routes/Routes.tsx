import { Routes as R, Route } from "react-router"

import BillingCycles from "../pages/billingCycles/BillingCycles"
import Dashboard from "../pages/dashboard/Dashboard"

const Routes = () => {
    return (
        <R>
            <Route path="/billingCycles" element={<BillingCycles/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </R>
    )
}

export default Routes