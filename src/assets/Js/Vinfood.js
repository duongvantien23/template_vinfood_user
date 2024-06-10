// function changeProductvinffood(type,element)
// {
//     let tabs = document.getElementsByClassName('tab-item');
//     for(i=0;i<tabs.length;i++)
//     tabs[i].style.background = '#FFF'
//     element.style.background='#91ad41';
//     console.log(type)
// }
// // document.getElementById('type').style.display = 'block';
// switch (type) {
//     case 'new':
//         document.getElementById('all').style.display = 'none';
//         document.getElementById('sale').style.display = 'none';
//         break;
//     case 'all':
//         document.getElementById('new').style.display = 'none';
//         document.getElementById('sale').style.display = 'none';
//         break;
//     case 'sale':
//         document.getElementById('new').style.display = 'none';
//         document.getElementById('all').style.display = 'none';
//         break;
// }



// ------------Lọc sản phẩm-------------------------------------------

var btnnew = document.querySelector(".tab-item-new")
var btnall = document.querySelector(".tab-item-all")
var btnsale = document.querySelector(".tab-item-sale")
var contentnew = document.getElementById('new')
var contentall = document.getElementById('all')
var contentsale = document.getElementById('sale')

btnnew.addEventListener("click",function(){
    contentall.style.display='none'
    contentsale.style.display='none'
    contentnew.style.display = 'block'
    btnnew.classList.add("active")
    btnall.classList.remove("active")
    btnsale.classList.remove("active")

})

btnall.addEventListener("click",function(){
    contentnew.style.display='none'
    contentsale.style.display='none'
    contentall.style.display = 'block'
    btnall.classList.add("active")
    btnnew.classList.remove("active")
    btnsale.classList.remove("active")

})

btnsale.addEventListener("click",function(){
    contentall.style.display='none'
    contentnew.style.display='none'
    contentsale.style.display = 'block'
    btnsale.classList.add("active")
    btnall.classList.remove("active")
    btnnew.classList.remove("active")

})
// -------Add-Cart------------------------------------------------------------------------------

// ---------Timkiem---------------------------------------------

var input = document.getElementById("search-box");
  function myFunction() {
      var filter, ul, li, a, i;
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      if (!filter) {
        ul.style.display = "none";
      }else{
        
        for (i = 0; i < li.length; i++) {
           
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                ul.style.display = "block";
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
 
            }
        }
      }
  }
  input.addEventListener("keyup", myFunction);

  
  document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cartItemCountElement = document.getElementById('cart-item-count'); 
// Duyệt
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var productContainer = button.closest('.product_name');
            var productId = button.getAttribute('data-product-id');
            var productName = productContainer.querySelector('h3 a').textContent;
            var productImage = productContainer.querySelector('img').getAttribute('src');
            var productPrice = productContainer.querySelector('.product_price').textContent;

            addToCart(productId, productName, productImage, productPrice);

            updateCartItemCount(); // Cập nhật số lượng đơn hàng sau khi thêm sản phẩm
        });
    });

    function addToCart(productId, productName, productImage, productPrice) {
        var cart = JSON.parse(localStorage.getItem('cart-product')) || {};
    
        if (cart[productId]) {
            cart[productId].quantity += 1; // Tăng số lượng sản phẩm nếu đã tồn tại
        } else {
            cart[productId] = {
                name: productName,
                image: productImage,
                price: parseFloat(productPrice.replace('₫', '').replace(',', '')), // Chuyển đổi giá tiền thành số
                quantity: 1
            };
        }
    
        localStorage.setItem('cart-product', JSON.stringify(cart));
    
        alert('Sản phẩm ' + productName + ' đã được thêm vào giỏ hàng!');
    }

    function updateCartItemCount() {
        var cart = JSON.parse(localStorage.getItem('cart-product')) || {};
        var itemCount = 0;

        for (var productId in cart) {
            if (cart.hasOwnProperty(productId)) {
                itemCount += 1; // Tổng số lượng sản phẩm trong giỏ hàng
            }
        }

        // Hiển thị số lượng đơn hàng bên cạnh icon giỏ hàng
        cartItemCountElement.textContent = itemCount;
    }
});



// document.addEventListener('DOMContentLoaded', function () {
//     var addToCartButtons = document.querySelectorAll('.add-to-cart');

//     addToCartButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             var productContainer = button.closest('.product_name');
//             var productId = button.getAttribute('data-product-id');
//             var productName = productContainer.querySelector('h3 a').textContent;
//             var productImage = productContainer.querySelector('img').getAttribute('src');
//             var productPrice = productContainer.querySelector('.product_price').textContent;

//             addToCart(productId, productName, productImage, productPrice);
//         });
//     });

//     function addToCart(productId, productName, productImage, productPrice) {
//         var cart = JSON.parse(localStorage.getItem('cart-product')) || {};

//         if (cart[productId]) {
//             cart[productId].quantity += 1;
//         } else {
//             cart[productId] = {
//                 name: productName,
//                 image: productImage,
//                 price: productPrice,
//                 quantity: 1
//             };
//         }

//         localStorage.setItem('cart-product', JSON.stringify(cart));

//         alert('Sản phẩm ' + productName + ' đã được thêm vào giỏ hàng!');

//         cart[productId].price = parseFloat(productPrice.replace(/[^\d.-]/g, '')); 

//         localStorage.setItem('cart-product', JSON.stringify(cart));
//     }
// });

// Lắng nghe sự kiện scroll trên trang web
window.addEventListener("scroll", function() {
	if (window.scrollY > 300) {
		document.querySelector(".back-to-top").style.display = "block";
	} else {
		document.querySelector(".back-to-top").style.display = "none";
	}
});

document.querySelector(".back-to-top").addEventListener("click", function() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
// Khi người dùng nhấp vào liên kết "back-to-top", sự kiện click sẽ được lắng nghe, và trang web sẽ được cuộn lên đầu trang bằng cách sử dụng phương thức window.scrollTo() với thuộc tính top được đặt là 0 và behavior được đặt là "smooth" để tạo ra hiệu ứng cuộn mượt mà.




