var cartContainer = document.getElementById("cart-container");
var cartList = []; 

function getCartList() {
    if (localStorage.getItem('cart') === null) {
      cartList = [];
    } else {
      cartList = JSON.parse(localStorage.getItem('cart'));
    }
}

function displaycart() {
  getCartList();
    let productElement = "";

    if (cartList.length === 0) {
        cartContainer.innerHTML = `<p class="text-center text-light">No products in the cart.</p>`;
        return;
    }

    for (let i = 0; i < cartList.length; i++) {
        productElement += `<div class="col-md-4 mb-3">
            <div class="card" style="width: 25rem;">
                <img src="${cartList[i].image}" class="card-img-top" alt="${cartList[i].title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${cartList[i].title}</h5>
                    <p class="card-text">$${cartList[i].price}</p>
                    <a onclick="deleteProduct(${i})" class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </div>
            </div>
        </div>`;
    }

    cartContainer.innerHTML = productElement;
}


function deleteProduct(index) {
  getCartList();
    if (index >= 0 && index < cartList.length) {
        cartList.splice(index, 1); 
        localStorage.setItem("cart", JSON.stringify(cartList));       
        displaycart(); 
    }
}

// code: start when page started  
displaycart();
