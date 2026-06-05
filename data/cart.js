export const cart = [];

export function addtoCart(productId) {
    let matchingItem;
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        if(cartItem.productId === productId) {
            matchingItem = cartItem;
        }
    });
    if(matchingItem) {
        matchingItem.quantity+=1;
    } else {
        cart.push({ productId: productId,
            quantity:1
        });
    }
}