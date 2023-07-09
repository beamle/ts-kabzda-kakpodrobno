type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

export const reducer = (state: StateType, action: ActionType): StateType => {
    console.log(state, action)

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Missing action type')
    }
}
