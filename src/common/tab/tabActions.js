//arquivo de actionsCreators

export function selectTab(tabId){
    
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {}
    //e  = cada um dos elem do array
    tabIds.forEach(e => tabsToShow[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}