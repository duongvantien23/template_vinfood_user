document.addEventListener('DOMContentLoaded', function () {
    var orderInfo = JSON.parse(localStorage.getItem('orderInfo')) || {};

    displayOrderInformation(orderInfo);
});

function displayOrderInformation(orderInfo) {
    var orderTableBody = document.getElementById('orderTableBody');
    var subtotalElement = document.getElementById('subtotal');
    var totalAmountElement = document.getElementById('totalAmount');
    var customerNameElement = document.getElementById('customerName');
    var customerPhoneElement = document.getElementById('customerPhone');
    var customerAddressElement = document.getElementById('customerAddress');
    var paymentMethodElement = document.getElementById('paymentMethod');
    var subtotal = 0;

    orderTableBody.innerHTML = '';

    if (orderInfo && orderInfo.selectedProducts) {
        for (var productId in orderInfo.selectedProducts) {
            var product = orderInfo.selectedProducts[productId];

            var price = parseFloat(product.price) || 0;
            var quantity = parseInt(product.quantity) || 0;

            subtotal += price * quantity;

            var newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><img width="100px" src="${product.image}" alt="${product.name}"></td>
                <td>${product.name}</td>
                <td>${price.toLocaleString('vi-VN')} đ</td>
                <td>${quantity}</td>
            `;

            orderTableBody.appendChild(newRow);
        }
    }

    subtotalElement.textContent = subtotal.toLocaleString('vi-VN') + ' đ';
    totalAmountElement.textContent = subtotal.toLocaleString('vi-VN');

    if (orderInfo && orderInfo.customerInfo) {
        customerNameElement.textContent = "Họ và tên: " + orderInfo.customerInfo.fullName;
        customerPhoneElement.textContent = "Số điện thoại: " + orderInfo.customerInfo.phone;
        customerAddressElement.textContent = "Địa chỉ: " + orderInfo.customerInfo.address;
        
        var paymentMethodLabel = "";
        switch (orderInfo.customerInfo.paymentMethod) {
            case 'cash_on_delivery':
                paymentMethodLabel = "Thanh toán khi nhận hàng";
                break;
            case 'credit_card':
                paymentMethodLabel = "Thanh toán qua thẻ";
                break;
            default:
                paymentMethodLabel = "Không xác định";
                break;
        }
        paymentMethodElement.textContent = "Phương thức thanh toán: " + paymentMethodLabel;
    }
}

