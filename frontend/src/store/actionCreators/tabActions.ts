import { Dispatch } from "redux";

export const selectTab = (tabId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TAB_SELECTED',
            payload: tabId
        })
    }
}