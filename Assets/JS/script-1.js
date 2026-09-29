/* ======================================================
   STORE CONFIGURATION
   Update these values to change the store name and phone
   number everywhere on the site.
====================================================== */
const STORE_CONFIG = {
  name: "Sweet Crumb Cakes",
  phone: "832-484-9161",
  phoneLink: "+18324849161"
};

/* ======================================================
   PRODUCTS
   Add custom dessert items here with a category, price,
   and image for the bakery storefront.
====================================================== */
const PRODUCTS = [
  {
    name: "Classic Vanilla Birthday Cake",
    price: 54.99,
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    sizes: "6-8 servings"
  },
  {
    name: "Chocolate Fudge Celebration Cake",
    price: 62.5,
    category: "Signature Cakes",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    sizes: "8-10 servings"
  },
  {
    name: "Strawberry Shortcake Layer",
    price: 48.99,
    category: "Seasonal Cakes",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    sizes: "6 servings"
  },
  {
    name: "Red Velvet Rose Cake",
    price: 59.99,
    category: "Seasonal Cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80",
    sizes: "8 servings"
  },
  {
    name: "Vanilla Cupcake Box",
    price: 24.99,
    category: "Cupcakes",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    sizes: "12 cupcakes"
  },
  {
    name: "Chocolate Ganache Cupcakes",
    price: 27.99,
    category: "Cupcakes",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=900&q=80",
    sizes: "12 cupcakes"
  },
  {
    name: "Sugar Cookie Gift Box",
    price: 19.99,
    category: "Treats",
    image: "https://images.unsplash.com/photo-1499636136210-6d847904a823?auto=format&fit=crop&w=900&q=80",
    sizes: "1 dozen"
  },
  {
    name: "Mini Cheesecake Bites",
    price: 22.99,
    category: "Treats",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=900&q=80",
    sizes: "10 bites"
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
  const message = `🛍️ Hi, I'm interested in this cake from *${STORE_CONFIG.name}*:\n\n` +
    `• ${product.name}\n` +
    `• Price: $${formatPrice(product.price)}\n` +
    `• Serving size: ${product.sizes}\n\n` +
    `Can you tell me more about it?`;
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
      <p class="product-sizes">Serves: ${product.sizes}</p>
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