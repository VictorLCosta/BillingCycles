import { useSelector } from 'react-redux'

import { State } from "../../store/storeConfig"

const TabContent = (props: any) => {
    const state = useSelector((state: State) => state.tab)
    const selected = state.selected == props.id

    return (
        <div id={props.id} className={`tab-pane fade ${selected ? 'show active': ''}`} role="tabpanel">
            {props.children}
        </div>
    )
}

export default TabContent