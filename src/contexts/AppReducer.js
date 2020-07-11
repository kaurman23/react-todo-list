export default (state, action) => {
    switch(action.type) {
        case 'JOB_DONE':
            return ({
                ...state,
                items: state.items.filter((item => item.id!==action.payload))
            })
        case 'ADD_JOB':
            console.log("okay")
            return({
                ...state,
                items: [action.payload, ...state.items]
            }

            )
        default:
            return state
    }
}