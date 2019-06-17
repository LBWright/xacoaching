const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_COACHES':
            return {
                coaches: action.payload,
            }
        default:
            throw new Error()
    }
}

export default reducer
