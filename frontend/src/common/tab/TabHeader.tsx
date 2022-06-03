import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tabActionCreators from '../../store/actionCreators/tabActions'
import { State } from '../../store/storeConfig'
import If from '../operators/If';

interface TabHeaderProps {
    icon: string,
    label: string
    target: string
}

const TabHeader = (props: TabHeaderProps) => {
    const dispatch = useDispatch()
    const { selectTab } = bindActionCreators(tabActionCreators, dispatch)
    const state = useSelector((state: State) => state.tab)

    return (
        <If test={state.visible[props.target]}>
            <li className="nav-item" role="presentation">
                <button onClick={() => selectTab(props.target)} className={`nav-link ${state.selected == props.target ? 'active' : ''}`} data-bs-toogle="tab" data-bs-target={props.target} type="button" role="tab">
                    <i className={`fas fa-${props.icon}`}></i> {props.label}
                </button>
            </li>
        </If>
    )
}

export default TabHeader