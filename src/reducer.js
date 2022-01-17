export const initialState = {
    basket: [],
    quantity: 0,
    user: null
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            if (action.addQuantity === "1") {
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                    quantity: state.quantity+=1,
                };
            } else {
                return {
                    ...state,
                    quantity: state.quantity+=1,
                }
            }
            
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
                quantity: 0,
            }

        case 'REMOVE_FROM_BASKET':
            var amount = state.quantity - state.basket[action.number].quantity;
            let newBasket = [...state.basket];


            if (action.number >= 0) {
                newBasket.splice(action.number, 1);
            } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            };   

            return {
                ...state,
                basket: newBasket,
                quantity: amount,
            }
        
        case 'CHANGE_QUANTITY':
            if (action.change === "ADD") {
                return {
                    ...state,
                    quantity: state.quantity+=1,
                }
            } else {
                return {
                    ...state,
                    quantity: state.quantity-=1,
                }
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, basket) => amount + (basket.price * basket.quantity), 0);

export default reducer;

