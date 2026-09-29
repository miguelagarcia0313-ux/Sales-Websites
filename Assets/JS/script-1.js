/* ======================================================
   STORE CONFIGURATION
   Update these values to change the store name and phone
   number everywhere on the site.
====================================================== */
const STORE_CONFIG = {
  name: "Basic Catalog Demo",
  phone: "832-484-9161",       // Shown in the interface
  phoneLink: "+18324849161"    // Used by the tel: and wa.me links, include country code
};

/* ======================================================
   PRODUCTS
   Basic Package: just name, price, category, image, and
   an optional sizes list shown as text.
   Add new items using this simple format:
   { name: "Product Name", price: 12.50, category: "Category", image: "image-url", sizes: "S, M, L" }
====================================================== */
const PRODUCTS = [
  {
    name: "Magellan Outdoors Men's Laguna Madre T-shirt",
    price: 35.99,
    category: "Shirts",
    image: "https://academy.scene7.com/is/image/academy/20379448?$pdp-gallery-ng$",
    sizes: "S, M, L, XL"
  },
  {
    name: "V-Neck T-Shirt",
    price: 24.99,
    category: "Shirts",
    image: "https://placehold.co/500x500/D64545/FFF7EA?text=V-Neck",
    sizes: "M, L"
  },
  {
    name: "Running Sneakers",
    price: 89.99,
    category: "Shoes",
    image: "https://placehold.co/500x500/2B2118/FFF7EA?text=Running+Shoes",
    sizes: "7, 8, 9, 10, 11, 12"
  },
  {
    name: "Casual Canvas Shoes",
    price: 64.99,
    category: "Shoes",
    image: "https://placehold.co/500x500/2F8F7B/FFF7EA?text=Canvas+Shoes",
    sizes: "6, 8, 10"
  },
  {
    name: "Adjustable Baseball Cap",
    price: 22.99,
    category: "Accessories",
    image: "https://placehold.co/500x500/D64545/FFF7EA?text=Baseball+Cap",
    sizes: "One size"
  },
  {
    name: "Cotton Crew Socks Pack",
    price: 16.99,
    category: "Accessories",
    image: "https://placehold.co/500x500/808080/FFF7EA?text=Socks+3-Pack",
    sizes: "S, L"
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
const categoryTabs = document.getElementById('category-tabs');
const emptyMessage = document.getElementById('empty-message');

let activeCategory = 'All';

function formatPrice(price) {
  return price.toFixed(2);
}

// Build the category tabs
function renderCategoryTabs() {
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  categoryTabs.innerHTML = '';

  categories.forEach(category => {
    const tab = document.createElement('button');
    tab.className = 'tab';
    tab.textContent = category;
    if (category === activeCategory) tab.classList.add('active');

    tab.addEventListener('click', () => {
      activeCategory = category;
      renderProducts();
      updateActiveTab();
    });

    categoryTabs.appendChild(tab);
  });
}

function updateActiveTab() {
  categoryTabs.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.textContent === activeCategory);
  });
}

function getFilteredProducts() {
  if (activeCategory === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === activeCategory);
}

// Build the WhatsApp message to order a specific product
function buildOrderLink(product) {
  const message = `🛍️ Hi, I'm interested in this product from *${STORE_CONFIG.name}*:\n\n` +
    `• ${product.name}\n` +
    `• Price: $${formatPrice(product.price)}\n` +
    `• Available sizes: ${product.sizes}\n\n` +
    `Is it in stock?`;
  return `https://wa.me/${STORE_CONFIG.phoneLink}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  card.innerHTML = `
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-body">
      <div class="product-category">${product.category}</div>
      <p class="product-description">${product.name}</p>
      <p class="product-sizes">Sizes: ${product.sizes}</p>
      <div class="price-tag">
        <span class="amount">$${formatPrice(product.price)}</span>
        <span class="currency">USD</span>
      </div>
      <a class="order-whatsapp-btn" href="${buildOrderLink(product)}" target="_blank" rel="noreferrer">Order via WhatsApp</a>
    </div>
  `;

  return card;
}

function renderProducts() {
  const filtered = getFilteredProducts();

  productGrid.innerHTML = '';
  emptyMessage.hidden = filtered.length > 0;
  if (filtered.length === 0) return;

  const grouped = filtered.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
  }, {});

  const categoriesToRender = activeCategory === 'All' ? Object.keys(grouped) : [activeCategory];

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
    count.textContent = `${grouped[category].length} ${grouped[category].length === 1 ? 'Product' : 'Products'}`;

    header.appendChild(title);
    header.appendChild(count);

    const productsWrap = document.createElement('div');
    productsWrap.className = 'section-products';
    grouped[category].forEach(product => productsWrap.appendChild(createProductCard(product)));

    section.appendChild(header);
    section.appendChild(productsWrap);
    productGrid.appendChild(section);
  });
}

// Initial load
renderCategoryTabs();
renderProducts();