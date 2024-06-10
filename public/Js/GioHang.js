document.addEventListener('DOMContentLoaded', function () {
    var cart = JSON.parse(localStorage.getItem('cart-product')) || {};
    var selectedProducts = {}; 

    updateCartCount();
    displayCartItems();

    function updateCartCount() {
        var cartCountElement = document.querySelector('.cart-popup-count');
        var totalOrders = Object.keys(cart).length;
        cartCountElement.textContent = totalOrders;
    }

    function displayCartItems() {
        var tableBody = document.getElementById('cartBody');
        var totalPrice = 0;

        tableBody.innerHTML = '';

        for (var productId in cart) {
            var product = cart[productId];
            var price = parseFloat(product.price) || 0;
            var quantity = parseInt(product.quantity) || 0;
            var totalItemPrice = price * quantity;

            totalPrice += totalItemPrice;

            var newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><img width="100px" src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>
                    <button class="remove" type="button" onclick="changeQuantity('${productId}', -1)">-</button>
                    <input type="text" class="count" min="1" value="${quantity}">
                    <button class="add" type="button" onclick="changeQuantity('${productId}', 1)">+</button>
                </td>
                <td>${totalItemPrice.toLocaleString('vi-VN')} đ</td>
                <td><button class="delete-item" type="button" data-product-id="${productId}" onclick="deleteItem('${productId}')">Xóa</button></td>
                <td><input type="checkbox" class="checkbox" data-product-id="${productId}" onchange="toggleProductSelection('${productId}')"></td>
            `;

            tableBody.appendChild(newRow);
        }

        var totalPriceElement = document.querySelector('.totals_price');
        totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + ' đ';
    }

    window.deleteItem = function(productId) {
        console.log('Xóa sản phẩm có ID:', productId);
        delete cart[productId];
        localStorage.setItem('cart-product', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
    };

    window.changeQuantity = function(productId, amount) {
        console.log(`Thay đổi số lượng của sản phẩm có ID ${productId} thêm ${amount}`);
        if (cart[productId]) {
            cart[productId].quantity += amount;
            if (cart[productId].quantity < 1) {
                deleteItem(productId);
            } else {
                localStorage.setItem('cart-product', JSON.stringify(cart));
                updateCartCount();
                displayCartItems();
            }
        }
    };

    // Hàm chuyển đổi trạng thái sản phẩm được chọn
    window.toggleProductSelection = function(productId) {
        var checkbox = document.querySelector(`.checkbox[data-product-id="${productId}"]`);
        if (checkbox.checked) {
            selectedProducts[productId] = cart[productId];
        } else {
            delete selectedProducts[productId];
        }
    };

    var proceedCheckoutBtn = document.querySelector('.proceed-checkout-btn');
    proceedCheckoutBtn.addEventListener('click', function() {
        localStorage.setItem('selected-products', JSON.stringify(selectedProducts));
        window.location.href = 'Thanhtoan.html';
    });
});







