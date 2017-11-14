export const CHANGE_BAR_STATUS = 'CHANGE_BAR_STATUS';


export function changeBarStatusSuccess(bar){
    return{
        type:CHANGE_BAR_STATUS, bar
    }
}
export function changeBarStatus(bar){
    return function(dispatch, getState){
        dispatch(changeBarStatusSuccess(bar))
    }
}