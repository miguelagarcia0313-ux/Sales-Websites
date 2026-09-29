/* ======================================================
   STORE CONFIGURATION
   Update these values to change the store name and phone
   number everywhere on the site.
====================================================== */
const STORE_CONFIG = {
  name: "Clothing Shop Demo",
  phone: "832-484-9161",
  phoneLink: "+18324849161"
};

/* ======================================================
   PRODUCTS
   Complete Package: adds "stock" to each product.
   stock can be: "in" (available), "low" (low stock), "out" (out of stock)
====================================================== */
const PRODUCTS = [
  {
    name: "Heritage Cotton Overshirt",
    price: 79.99,
    category: "Shirts",
    stock: "in",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Stone", hex: "#d7c6b5", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
      { name: "Olive", hex: "#6e7b58", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Crest Knit Polo",
    price: 68.5,
    category: "Shirts",
    stock: "low",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#1f2b3a", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" },
      { name: "Camel", hex: "#b68a5b", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Summit Utility Jacket",
    price: 149.99,
    category: "Outerwear",
    stock: "in",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    colors: [
      { name: "Forest", hex: "#2f4537", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
      { name: "Black", hex: "#171613", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Aster Leather Bomber",
    price: 189.99,
    category: "Outerwear",
    stock: "in",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1b1b1b", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
      { name: "Tan", hex: "#caa77a", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Trail Runner Sneaker",
    price: 94.99,
    category: "Shoes",
    stock: "in",
    sizes: ["6", "7", "8", "9", "10", "11"],
    availableSizes: ["7", "8", "9", "10", "11"],
    colors: [
      { name: "White", hex: "#f4efe8", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
      { name: "Graphite", hex: "#3d3d3d", image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Monarch Court Sneaker",
    price: 109.99,
    category: "Shoes",
    stock: "low",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    availableSizes: ["6", "7", "8", "9", "10"],
    colors: [
      { name: "Cream", hex: "#ece4d6", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80" },
      { name: "Chestnut", hex: "#8d5d42", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Harbor Weekender Tote",
    price: 84.99,
    category: "Accessories",
    stock: "in",
    sizes: ["One Size"],
    availableSizes: ["One Size"],
    colors: [
      { name: "Sand", hex: "#d3b89b", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80" },
      { name: "Black", hex: "#232323", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" }
    ]
  },
  {
    name: "Fieldline Wool Cap",
    price: 39.99,
    category: "Accessories",
    stock: "in",
    sizes: ["One Size"],
    availableSizes: ["One Size"],
    colors: [
      { name: "Charcoal", hex: "#3d3d3d", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" },
      { name: "Rust", hex: "#a8553d", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80" }
    ]
  }
];

/* ======================================================
   NO NEED TO EDIT ANYTHING BELOW THIS LINE
====================================================== */

document.title = STORE_CONFIG.name;
document.getElementById('store-name').textContent = STORE_CONFIG.name;
document.getElementById('phone-number').textContent = STORE_CONFIG.phone;
document.getElementById('phone-link').href = `tel:${STORE_CONFIG.phoneLink}`;

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search-input');
const categoryChips = document.getElementById('category-chips');
const emptyMessage = document.getElementById('empty-message');
const sortSelect = document.getElementById('sort-select');
const favoritesToggle = document.getElementById('favorites-toggle');
const quickviewModal = document.getElementById('quickview-modal');
const quickviewBody = document.getElementById('quickview-body');
const closeQuickviewBtn = document.getElementById('close-quickview');

let activeCategory = 'All';
let searchTerm = '';
let sortMode = 'default';
let showFavoritesOnly = false;
let favorites = new Set(); // Product names marked as favorites
let cart = [];

function formatPrice(price) {
  return price.toFixed(2);
}

const STOCK_LABELS = {
  in: { text: 'In Stock', className: 'in-stock' },
  low: { text: 'Low Stock', className: 'low-stock' },
  out: { text: 'Out of Stock', className: 'out-of-stock' }
};

// ===== CATEGORIES =====
function renderCategoryChips() {
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  categoryChips.innerHTML = '';

  const title = document.createElement('div');
  title.className = 'sidebar-title';
  title.textContent = 'Filters';
  title.style.cssText = 'font-family: var(--font-display); font-weight: 700; font-size: 18px; color: var(--ink); margin-bottom: 16px; display: block;';
  categoryChips.appendChild(title);

  categories.forEach(category => {
    const chip = document.createElement('button');
    chip.classList.add('chip');
    chip.textContent = category;
    if (category === activeCategory) chip.classList.add('active');

    chip.addEventListener('click', () => {
      activeCategory = category;
      renderProducts();
      updateActiveChip();
    });

    categoryChips.appendChild(chip);
  });
}

function updateActiveChip() {
  categoryChips.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent === activeCategory);
  });
}

// ===== FILTER + SORT =====
function getVisibleProducts() {
  let list = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorites = !showFavoritesOnly || favorites.has(product.name);
    return matchesCategory && matchesSearch && matchesFavorites;
  });

  const stockOrder = { in: 0, low: 1, out: 2 };

  if (sortMode === 'price-asc') {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price-desc') {
    list = [...list].sort((a, b) => b.price - a.price);
  } else if (sortMode === 'availability') {
    list = [...list].sort((a, b) => stockOrder[a.stock] - stockOrder[b.stock]);
  }

  return list;
}

// ===== PRODUCT CARD =====
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  if (product.stock === 'out') card.classList.add('out-of-stock');

  const defaultColor = product.colors[0];
  const hasMultipleColors = product.colors && product.colors.length > 1;
  const hasSizes = product.sizes && product.sizes.length > 0;
  let selectedColorIndex = 0;
  let selectedSize = product.availableSizes && product.availableSizes.length > 0 ? product.availableSizes[0] : null;
  const isFavorite = favorites.has(product.name);
  const stockInfo = STOCK_LABELS[product.stock] || STOCK_LABELS.in;
  const isOut = product.stock === 'out';

  card.innerHTML = `
    <div class="product-image-wrap">
      <button class="favorite-btn ${isFavorite ? 'active' : ''}" aria-label="Toggle favorite">${isFavorite ? '❤️' : '🤍'}</button>
      <button class="quickview-btn">Quick view</button>
      <img src="${defaultColor.image}" alt="${product.name} in ${defaultColor.name}" class="product-image">
    </div>
    ${hasMultipleColors ? `
      <div class="color-selector">
        ${product.colors.map((color, index) => `
          <button class="color-bubble ${index === 0 ? 'active' : ''}"
                  style="background-color: ${color.hex}"
                  title="${color.name}"
                  data-color-index="${index}"
                  aria-label="${color.name}">
          </button>
        `).join('')}
      </div>
    ` : ''}
    <div class="product-body">
      <span class="stock-badge ${stockInfo.className}">${stockInfo.text}</span>
      <div class="product-category">${product.category}</div>
      <p class="product-description">${product.name}</p>
      ${hasSizes ? `
        <div class="size-selector">
          <label class="size-label">Size:</label>
          <div class="size-options">
            ${product.sizes.map(size => `
              <button class="size-button ${product.availableSizes.includes(size) ? 'available' : 'unavailable'} ${selectedSize === size ? 'selected' : ''}"
                      data-size="${size}"
                      ${product.availableSizes.includes(size) ? '' : 'disabled'}
                      aria-label="Size ${size}">
                ${size}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <div class="price-tag">
        <span class="amount">$${formatPrice(product.price)}</span>
        <span class="currency">USD</span>
      </div>
      <button class="add-to-cart-btn" ${isOut ? 'disabled' : ''}>${isOut ? 'Out of Stock' : 'Add to Cart'}</button>
    </div>
  `;

  const productImage = card.querySelector('.product-image');

  // Favorites
  card.querySelector('.favorite-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (favorites.has(product.name)) {
      favorites.delete(product.name);
    } else {
      favorites.add(product.name);
    }
    renderProducts();
  });

  // Quick view
  card.querySelector('.quickview-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openQuickview(product, selectedColorIndex);
  });

  // Color selection
  if (hasMultipleColors) {
    const colorBubbles = card.querySelectorAll('.color-bubble');
    colorBubbles.forEach(bubble => {
      bubble.addEventListener('click', () => {
        selectedColorIndex = parseInt(bubble.dataset.colorIndex);
        const selectedColor = product.colors[selectedColorIndex];
        productImage.src = selectedColor.image;
        productImage.alt = `${product.name} in ${selectedColor.name}`;
        colorBubbles.forEach(b => b.classList.remove('active'));
        bubble.classList.add('active');
      });
    });
  }

  // Size selection
  if (hasSizes) {
    const sizeButtons = card.querySelectorAll('.size-button');
    sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
        selectedSize = button.dataset.size;
      });
    });
  }

  // Add to cart
  const addToCartBtn = card.querySelector('.add-to-cart-btn');
  if (!isOut) {
    addToCartBtn.addEventListener('click', () => {
      if (hasSizes && !selectedSize) {
        alert('Please select a size');
        return;
      }
      const selectedColor = product.colors[selectedColorIndex];
      addToCart(product, selectedColor, selectedSize);
    });
  }

  return card;
}

// ===== QUICK VIEW =====
function openQuickview(product, colorIndex) {
  const color = product.colors[colorIndex] || product.colors[0];
  const stockInfo = STOCK_LABELS[product.stock] || STOCK_LABELS.in;

  quickviewBody.innerHTML = `
    <img src="${color.image}" alt="${product.name}" class="quickview-image">
    <div class="quickview-info">
      <span class="stock-badge ${stockInfo.className}">${stockInfo.text}</span>
      <div class="product-category">${product.category}</div>
      <h3>${product.name}</h3>
      <div class="price-tag" style="align-self:flex-start;">
        <span class="amount">$${formatPrice(product.price)}</span>
        <span class="currency">USD</span>
      </div>
      <p style="color:var(--ink-soft); font-size:14px; line-height:1.6; margin-top:6px;">
        Available colors: ${product.colors.map(c => c.name).join(', ')}.<br>
        Sizes: ${(product.availableSizes || product.sizes || []).join(', ')}.
      </p>
    </div>
  `;
  quickviewModal.classList.add('open');
}

closeQuickviewBtn.addEventListener('click', () => quickviewModal.classList.remove('open'));
quickviewModal.addEventListener('click', (e) => {
  if (e.target === quickviewModal) quickviewModal.classList.remove('open');
});

// ===== MAIN RENDER =====
function renderProducts() {
  const filtered = getVisibleProducts();

  productGrid.innerHTML = '';
  emptyMessage.hidden = filtered.length > 0;
  if (filtered.length === 0) return;

  const groupedProducts = filtered.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
  }, {});

  const categoriesToRender = Object.keys(groupedProducts);

  categoriesToRender.forEach(category => {
    const section = document.createElement('section');
    section.className = 'category-section';

    const header = document.createElement('div');
    header.className = 'category-header';

    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = category;

    const count = document.createElement('span');
    count.className = 'category-count';
    count.textContent = `${groupedProducts[category].length} ${groupedProducts[category].length === 1 ? 'Product' : 'Products'}`;

    header.appendChild(title);
    header.appendChild(count);

    const productsWrap = document.createElement('div');
    productsWrap.className = 'section-products';
    groupedProducts[category].forEach(product => productsWrap.appendChild(createProductCard(product)));

    const carouselWrap = document.createElement('div');
    carouselWrap.className = 'carousel-wrap';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow prev';
    prevBtn.setAttribute('aria-label', `Previous ${category} products`);
    prevBtn.innerHTML = '&#8249;';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow next';
    nextBtn.setAttribute('aria-label', `Next ${category} products`);
    nextBtn.innerHTML = '&#8250;';

    carouselWrap.appendChild(prevBtn);
    carouselWrap.appendChild(productsWrap);
    carouselWrap.appendChild(nextBtn);

    section.appendChild(header);
    section.appendChild(carouselWrap);
    productGrid.appendChild(section);

    setupCarousel(productsWrap, prevBtn, nextBtn);
  });
}

// ===== CAROUSEL CONTROLS =====
// Lets each category row scroll horizontally through its products via
// the side arrow buttons, instead of wrapping into extra rows.
function setupCarousel(track, prevBtn, nextBtn) {
  function updateArrows() {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  }

  function scrollByPage(direction) {
    track.scrollBy({ left: direction * track.clientWidth * 0.86, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => scrollByPage(-1));
  nextBtn.addEventListener('click', () => scrollByPage(1));
  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);

  updateArrows();
  // Images load async and can change scrollWidth right after the initial render
  setTimeout(updateArrows, 300);
}

// ===== CART FUNCTIONS =====
function addToCart(product, color, size = null) {
  const cartItem = { name: product.name, color: color.name, size, price: product.price, quantity: 1 };

  const existingItem = cart.find(item =>
    item.name === product.name && item.color === color.name && item.size === size
  );
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(cartItem);
  }

  updateCartDisplay();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');

  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-color">Color: ${item.color}</div>
          ${item.size ? `<div class="cart-item-size">Size: ${item.size}</div>` : ''}
          <div class="cart-item-price">$${formatPrice(item.price)} x ${item.quantity} = $${formatPrice(itemTotal)}</div>
        </div>
        <button class="remove-item-btn" data-index="${index}">Remove</button>
      </div>
    `;
  }).join('');

  cartItems.innerHTML += `
    <div class="cart-total">
      <strong>Total: $${formatPrice(total)}</strong>
    </div>
    <div class="checkout-form">
      <label for="checkout-name">Name</label>
      <input type="text" id="checkout-name" placeholder="Your name">
      <label for="checkout-address">Delivery address</label>
      <textarea id="checkout-address" rows="2" placeholder="Address, or how you'd like to receive your order"></textarea>
    </div>
    <button id="send-whatsapp-btn" class="send-whatsapp-btn">Send via WhatsApp</button>
  `;

  document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => removeFromCart(parseInt(e.target.dataset.index)));
  });

  document.getElementById('send-whatsapp-btn').addEventListener('click', sendCartToWhatsApp);
}

function sendCartToWhatsApp() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const nameField = document.getElementById('checkout-name');
  const addressField = document.getElementById('checkout-address');
  const customerName = nameField ? nameField.value.trim() : '';
  const customerAddress = addressField ? addressField.value.trim() : '';

  let message = `🛍️ *Order from ${STORE_CONFIG.name}*\n\n`;

  if (customerName) message += `👤 Name: ${customerName}\n`;
  if (customerAddress) message += `📍 Delivery: ${customerAddress}\n`;
  if (customerName || customerAddress) message += `\n`;

  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `${index + 1}. ${item.name}\n   Color: ${item.color}\n`;
    if (item.size) message += `   Size: ${item.size}\n`;
    message += `   $${formatPrice(item.price)} x ${item.quantity} = $${formatPrice(itemTotal)}\n\n`;
  });

  message += `💰 *Total: $${formatPrice(total)}*\n\n`;
  message += `Please confirm this order. Thank you! 😊`;

  const whatsappLink = `https://wa.me/${STORE_CONFIG.phoneLink}?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
}

// ===== SEARCH, SORT, AND FAVORITES EVENTS =====
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderProducts();
});

sortSelect.addEventListener('change', (e) => {
  sortMode = e.target.value;
  renderProducts();
});

favoritesToggle.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  favoritesToggle.classList.toggle('active', showFavoritesOnly);
  favoritesToggle.textContent = showFavoritesOnly ? '❤️ Viewing favorites' : '🤍 Favorites';
  renderProducts();
});

// ===== CART MODAL =====
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');

cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
closeCartBtn.addEventListener('click', () => cartModal.classList.remove('open'));
cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) cartModal.classList.remove('open');
});

// ===== HAMBURGER MENU =====
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');
let menuOpen = false;

hamburgerMenu.addEventListener('click', () => {
  menuOpen = !menuOpen;
  hamburgerMenu.classList.toggle('active');
  categoryChips.classList.toggle('visible');
  sidebarOverlay.classList.toggle('visible');
  hamburgerMenu.setAttribute('aria-expanded', menuOpen);
});

sidebarOverlay.addEventListener('click', () => {
  menuOpen = false;
  hamburgerMenu.classList.remove('active');
  categoryChips.classList.remove('visible');
  sidebarOverlay.classList.remove('visible');
  hamburgerMenu.setAttribute('aria-expanded', false);
});

// Initial load
renderCategoryChips();
renderProducts();