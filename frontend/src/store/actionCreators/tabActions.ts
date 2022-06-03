import { Dispatch } from "redux";

export const selectTab = (tabId: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TAB_SELECTED',
            payload: tabId
        })
    }
}

export const showTabs = (...tabsId: any) => {
    const tabsToShow: boolean[] = []
    tabsId.forEach((e: any) => tabsToShow[e] = true)

    return (dispatch: Dispatch) => {
        dispatch({
            type: 'TAB_SHOWED',
            payload: tabsToShow
        })
    }
}