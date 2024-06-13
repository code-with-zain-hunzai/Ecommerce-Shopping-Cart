const initialState = {
    cart: []
};

export const getTotal = (cart) => {
    return (
        cart.reduce((amount, item) => parseInt(item.price) + amount, 0)
    )
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "Add_item_to_cart": {
            const newItem = {
                id: action.id,
                title: action.title,
                price: action.price,
                rating: action.rating,
                image: action.image,
                currency: action.currency
            };
            return {
                ...state,
                cart: [...state.cart, newItem]
            };
        }
        case "Remove_item_from_cart": {
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn("Cannot delete item with id: ", action.id);
            }
            return {
                ...state,
                cart: newCart
            };
        }
        default:
            return state;
    }
}

export default cartReducer;



//




