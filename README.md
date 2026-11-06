# Ripped to Shreds Wireframe

Structure-only wireframe for the Ripped to Shreds web store. No brand styling applied yet.

## Pages

- `index.html` Home
- `shop.html` Collection with filters, sort and pagination
- `product.html` Product detail
- `cart.html` Cart
- `cart-empty.html` Empty cart and expired hold states
- `checkout.html` Checkout
- `drops.html` Drops with countdown and archive
- `bands.html` Band spotlight index
- `spotlight.html` Band spotlight detail
- `trade.html` Trade in policy and pre-submit form
- `about.html` About, hours and map
- `contact.html` Contact
- `search.html` Search results and no results state
- `account.html` Sign in, create account and signed in view
- `order-confirmation.html` Order confirmation
- `faq.html` Shipping, returns and FAQ
- `guest-racks.html` Guest racks and host a rack form
- `popups.html` Upcoming and past pop-ups
- `legal.html` Privacy and terms
- `404.html` Page not found

## Files

- `styles.css` Shared styles. Tokens live in `:root`.
- `script.js` Menu toggle, filter panel sync and size picker.

## Preview

Open `index.html` locally, or enable GitHub Pages from the main branch root.

## Design

Styled design pass lives in `design/` (home, shop, product). Same structure as the wireframe, with the cut-paper headline, speckle texture, new product card and hover states. Responsive via container queries.

- `design/index.html` Home
- `design/shop.html` Shop
- `design/product.html` Product
- `design/site.css` Design styles
- `design/design.js` Menu toggle, add to cart toggle and size picker
- `design/tex-dark.png` Speckle texture

Live: https://kazakazak.github.io/ripped-to-shreds/design/

## Design source

`design-source/` holds the Claude Design boards (`*.dc.html`) and shared `site.css`, as a record of the original design files. They need the Claude Design viewer to render, so use `design/` for the browser version.
