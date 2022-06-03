import { useSelector } from 'react-redux'

import { State } from "../../store/storeConfig"
import If from '../operators/If'

const TabContent = (props: any) => {
    const state = useSelector((state: State) => state.tab)
    const selected = state.selected == props.id

    return (
        <If test={state.visible[props.id]}>
            <div id={props.id} className={`tab-pane fade ${selected ? 'show active': ''}`} role="tabpanel">
                {props.children}
            </div>
        </If>
    )
}

export default TabContent