# Catalog Website

Website Pages meant to vie in demo form aswell as inform of packages and content.

# Project structure

```
index.html                  → Sales page: presents the 3 packages ($130 / $150 / $170)
Pages/
  index-1.html                → Package 1 demo — Basic Catalog ($130)
  index-2.html                → Package 2 demo — Catalog + Cart, search & filters ($150)
  index-3.html                → Package 3 demo — Complete Catalog ($170)
Assets/
  CSS/
    styles.css                → Sales page styles (white / navy / black)
    styles1.css                → Package 1 styles (white / green accent)
    styles2.css                → Package 2 styles (white / navy accent, 4-column grid)
    styles3.css                → Package 3 styles (white / gold accent, 6-column grid)
  JS/
    script1.js                 → Package 1 logic
    script2.js                 → Package 2 logic
    script3.js                 → Package 3 logic
  IMG/
    Logo.png                  → Sample store logo (swap for the client's own)
```

## Color schemes

- **Sales page (`index.html`):** white, navy blue, and black — nothing else.
- **Package 1 demo:** white background, black text, green accent.
- **Package 2 demo:** white background, black text, navy blue accent.
- **Package 3 demo:** white background, black text, gold accent.

Each demo keeps its own distinct look so a client can see the packages are genuinely different tiers,
while everything stays in the same clean, minimal, modern style — no background textures, thick borders,
or offset "sticker" shadows.

## What's included in each package

- **Package 1 — Basic Catalog ($130):** products by category, category tabs, an "Order via WhatsApp"
  button on each product. No search bar, no cart. 2-column grid.
- **Package 2 — Catalog + Cart ($150):** everything in Package 1, plus a live search bar, a category
  filter sidebar, color/size selectors, and a shopping cart that builds the order and sends it via
  WhatsApp. **4-column grid** on desktop, responsive down to 1 column on mobile.
- **Package 3 — Complete Catalog ($170):** everything in Package 2, plus favorites, a quick-view modal,
  sort by price/availability, stock badges (In Stock / Low Stock / Out of Stock), and a name + address
  form before the order is sent via WhatsApp. **6-column grid** on desktop, responsive down to 1 column
  on mobile.

## Editing each demo

Every `scriptN.js` starts with two easy-to-edit blocks:

1. `STORE_CONFIG` — store name and phone number (used automatically in the header and in the
   WhatsApp/call links).
2. `PRODUCTS` — the product list. Follow the same format already there; copy an existing product
   and change its details to add a new one.

No need to touch the HTML or CSS to add or remove products.

## Relative paths

`index.html` lives at the root and links to `Assets/...` directly. Files inside `Pages/` use
`../Assets/...` since they're one level deeper. If you move a file to a different folder, double
check those paths still point to the right place.

## Local Execution
1. Open
2. Initiate local server:
   python3 -m http.server 8000
3. Open http://127.0.0.1:8000/ in your navigator.

