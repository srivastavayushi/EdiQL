const reducer = (state,action) =>{
    switch (action.type) {
        // case 'SET_ACTIVE_TABLE':
        //     return {
        //         ...state,
        //         tableData: action.payload,
        //     };
        case 'SET_ACTIVE_TABLE_NAME':
                return {
                    ...state,
                    activeTable: action.payload,
                };
        default:
            return state;
    }
}

export default reducer;