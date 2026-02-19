//product data
const products = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    category: "men",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Elegant Silk Dress",
    category: "women",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Leather Crossbody Bag",
    category: "accessories",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Classic Denim Jacket",
    category: "men",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Floral Summer Blouse",
    category: "women",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1564257577154-75bdec5c3700?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Minimalist Watch",
    category: "accessories",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Wool Blend Sweater",
    category: "men",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "High-Waist Trousers",
    category: "women",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    title: "Vintage Sunglasses",
    category: "accessories",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    title: "Casual Polo Shirt",
    category: "men",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    title: "Designer Blazer",
    category: "women",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    title: "Premium Backpack",
    category: "accessories",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

// cart functionality
let cart = [];
let currentPaymentMethod = "credit";

function renderProducts(productsToRender = products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = productsToRender
    .map(
      (product) => `
    <div class="product-card" data-category=${product.category}>
      <img src="${product.image}" alt="${product.title} class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-category">
          ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <div class="product-price">$${product.price}</div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add To Cart</button>
      </div> 
    </div>  
  `,
    )
    .join("");
}

function filterProducts(category, event) {
  //update active filter button
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // filter products
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  renderProducts(filteredProducts);
}
