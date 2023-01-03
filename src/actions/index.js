export const inc = (item) => {
    return {
        type: "ITEM_INC",
        payload: item,
    };
};

export const dec = (item) => {
    return {
        type: "ITEM_DEC",
        payload: item,
    };
};

export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item,
    };
};

export const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item,
    };
};

export const itemsTotal = (item) => {
    return {
        type: "ITEMS_TOTAL",
        payload: item,
    };
};
