export interface CartItem {
    maSP: string;
    quantity: number;
    tenSP: string;
    hinhAnh: string;
    gia: number;
}

export function addToCart(item: CartItem) {
    item.quantity = 1;

    let cartItems: CartItem[] = [];

    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
        cartItems = JSON.parse(cartItemsString);
        let found = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].maSP === item.maSP) {
                cartItems[i].quantity += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            cartItems.push(item);
        }
    } else {
        cartItems.push(item);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert("Đã thêm vào giỏ hàng thành công!");
}


