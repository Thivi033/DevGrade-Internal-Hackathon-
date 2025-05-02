# 🛒 Challenge 2: Add an Item to the Website

## 📝 Overview

Challenge 2 focuses on enhancing your website by adding a new product/item along with its **price** and **specifications**.

**This challenge consists of the following tasks:**

- Add a new product to the page
- Include the product's name, price, and a list of specifications
- Style the item card to match the rest of the site

---

## 🧩 a. Create a Product Item Card

The new item should be added in the main content area using HTML. It must display:

- ✅ Product name
- ✅ Product price
- ✅ Product specifications (at least 3)

<p align="center">
  <img src="./assets/challenge02-product-preview.png" width="400px"/>
  <br/>
  <b>Example of a Product Card</b>
</p>

---

### ✅ Steps

1. Open the `index.html` file.
2. Find or create a `<div>` container for your products.
3. Add the following HTML structure inside it:

```html
<div class="product-card">
  <h2 class="product-title">Eco Water Bottle</h2>
  <p class="product-price">$12.99</p>
  <ul class="product-specs">
    <li>500ml capacity</li>
    <li>Made from BPA-free materials</li>
    <li>Keeps drinks cold for 12 hours</li>
  </ul>
</div>
