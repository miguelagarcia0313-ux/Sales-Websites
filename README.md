# Sales Websites

This project is a static landing page and demo storefront collection built to showcase three website packages for a business. It includes a sales page, three product demo pages, and custom styling for each package tier.

## Overview

The site is designed to present a clean sales flow:

- a pricing and feature landing page at the root
- three responsive demo storefronts in the Pages folder
- a reusable structure for updating product data and business info without editing the HTML

## Project structure

```text
Sales-Websites/
├── index.html                   # Main sales/pricing website
├── README.md                   # Project documentation
├── Pages/
│   ├── index-1.html            # Package 1 demo - Basic catalog
│   ├── index-2.html            # Package 2 demo - Catalog + cart
│   └── index-3.html            # Package 3 demo - Full storefront
├── Assets/
│   ├── CSS/
│   │   ├── styles.css          # Main pricing page styling
│   │   ├── styles-1.css       # Package 1 demo styling
│   │   ├── styles-2.css       # Package 2 demo styling
│   │   └── styles-3.css       # Package 3 demo styling
│   ├── IMG/
│   │   └── ...                 # Brand or product images
│   └── JS/
│       ├── script-1.js         # Package 1 logic and product data
│       ├── script-2.js         # Package 2 logic and product data
│       └── script-3.js         # Package 3 logic and product data
└──
```

## Package options

### Package 1 - Basic Catalog ($130)
- Product listing by category
- Category tabs
- WhatsApp order buttons
- Mobile-friendly layout
- No search, cart, or advanced filters

### Package 2 - Regular ($150)
- Everything in Package 1
- Live search
- Category filters
- Color and size selection
- Shopping cart that builds an order to send via WhatsApp

### Package 3 - Complete Catalog ($170)
- Everything in Package 2
- Favorites and quick-view modal
- Sorting by price or availability
- Stock badges and product detail states
- Customer name and address form before checkout

## Editing the demos

Each script file contains easy-to-edit configuration and product data:

1. `STORE_CONFIG` - store name, phone number, and default contact info
2. `PRODUCTS` - product array with prices, categories, stock, colors, and images

To add or update products, edit the corresponding `script-*.js` file rather than the HTML/CSS files.

## Styling notes

- The sales page uses a white, navy, and black palette.
- Package 1 is a clean white-and-green look.
- Package 2 uses a white-and-navy theme.
- Package 3 uses a white-and-gold theme.

This keeps each package visually distinct while maintaining the same modern, minimal style.

## Running locally

From the project folder, start a local web server:

```bash
cd "c:\VS Code\Sales-Websites"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

You can also use the Live Server extension in VS Code for a quicker preview during development.

## Notes

The root page links directly to local assets using relative paths. Files inside the Pages folder reference `../Assets/...` because they are one level deeper. If you move files around, make sure those paths still match the new structure.
