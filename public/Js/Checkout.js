document.addEventListener('DOMContentLoaded', function () {
    var selectedProducts = JSON.parse(localStorage.getItem('selected-products')) || {};
    displayOrderInformation(selectedProducts);
});

function displayOrderInformation(selectedProducts) {
    var orderTableBody = document.getElementById('orderTableBody');
    var subtotalElement = document.getElementById('subtotal');
    var totalAmountElement = document.getElementById('totalAmount');
    var subtotal = 0;

 
    orderTableBody.innerHTML = '';

    for (var productId in selectedProducts) {
        var product = selectedProducts[productId];

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

    subtotalElement.textContent = subtotal.toLocaleString('vi-VN') + ' đ';
    totalAmountElement.textContent = subtotal.toLocaleString('vi-VN');
}
function chuyenHuong() {

    var fullName = document.getElementById("billing_address_full_name").value;
    var phone = document.getElementById("billing_address_phone").value;
    var address = document.getElementById("billing_address_address1").value;
    var province = document.getElementsByName("customer_shipping_province")[0].value;
    var district = document.getElementById("customer_shipping_district").value;
    var village = document.getElementById("customer_shipping_district").value;
    var paymentMethod = document.querySelector("select[name='payment_method']").value;

    if (
        fullName.trim() === "" ||
        phone.trim() === "" ||
        address.trim() === "" ||
        province === "null" ||
        district === "null" ||
        village === "null" ||
        paymentMethod === ""
    ) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    var customerInfo = {
        fullName: fullName,
        phone: phone,
        address: address,
        province: province,
        district: district,
        village: village,
        paymentMethod: paymentMethod
    };
    localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

    var selectedProducts = JSON.parse(localStorage.getItem('selected-products')) || {};

    var orderInfo = {
        customerInfo: customerInfo,
        selectedProducts: selectedProducts
    };

    localStorage.setItem("orderInfo", JSON.stringify(orderInfo));

    window.location.href = 'dangchoxacnhan.html';
}
