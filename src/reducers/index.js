const initialState = {
    cart: [],
    totalPrice: 0,
    totalItemsInCart: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let check = false;
            state.cart.map((item, key) => {
                if (item.id == action.payload.id) {
                    // state.cart[key].quantity++;
                    check = true;
                }
            });
            if (!check) {
                let formCart = {
                    image: action.payload.image,
                    title: action.payload.title,
                    country: action.payload.country,
                    quantity: 1,
                    id: action.payload.id,
                    price: action.payload.price,
                };
                state.cart.push(formCart);
            }

            return {
                ...state,
            };

        case "REMOVE_FROM_CART":
            const newState = state.cart.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                cart: newState,
            };
        case "ITEM_INC":
            state.cart.map((item, key) => {
                if (item.id == action.payload.id) {
                    state.cart[key].quantity++;
                }
            });
            return {
                ...state,
            };
        case "ITEM_DEC":
            state.cart.map((item, key) => {
                if (item.id == action.payload.id && state.cart[key].quantity > 1) {
                    state.cart[key].quantity--;
                }
            });
            return {
                ...state,
            };

        case "ITEMS_TOTAL":
            const total = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
            return {
                ...state,
                totalPrice: total,
            };
        default:
            return state;
    }
};

export default reducer;
