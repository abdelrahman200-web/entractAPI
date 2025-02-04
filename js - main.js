var searchInput = document.getElementById("searchProduct");
var productsContainer = document.getElementById("products-container");
var cartContainer = document.getElementById("cart-container");

var allProducts = [];
var cartList = [];
// fetch products form fake store api. 
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = `<p class="text-center text-danger">Failed to load products. Please try again later.</p>`;
  }
}

// display products
function displayProducts(products) {
  let productElement = ""; 
  for (let i = 0; i < products.length; i++) {
    productElement += `<div class="col-md-4 mb-3">
      <div class="card" style="width: 25rem;">
        <img src="${products[i].image}" class="card-img-top" alt="${products[i].title}" style="height: 200px; object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title text-truncate">${products[i].title}</h5>
          <p class="card-text">$${products[i].price}</p>
          <a onclick="AddToCart(${i})" class="btn btn-info"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
    </div>`;
  }
  productsContainer.innerHTML = productElement;
}


// search 
searchInput.addEventListener("input", () => {
  var query = searchInput.value.toLowerCase();
  var filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});

function AddToCart(index){
let selectedProduct = allProducts[index];
cartList.push(selectedProduct);
  // Store the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cartList));
}




// code: start when page started  
fetchProducts();



