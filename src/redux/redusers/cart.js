const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

function cart(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            }
        case 'SET_PIZZAS':
            return {
                ...state,
                totalCount: action.payload,
            }
        default:
            return state;
    }
}

export default cart;
