# 💡 Challenge 2 Update Cart Total

## 📝 Overview

Challenge 2 focuses on adding interactivity by dynamically updating the **total cart amount** when a user changes item quantities.

**This challenge consists of one key feature:**

- Update the total price in the shopping cart based on item quantity changes.

---

## 🔧 a. Dynamically Update the Cart Total

The goal is to provide a responsive user experience by calculating and displaying the total price whenever item quantities are modified.

<p align="center">
  <img src="./assets/challenge03-cart-total-before.png" width="400px"/>
  <br/>
  <b>Before</b>: Total is incorrect or static
</p>

### ✅ Steps

1. Open the `cart.html` file.
2. Ensure each cart item includes:
   - A `span` or `div` element with the class `.price` and a `data-price` attribute
   - An `<input>` element of type `number` with the class `.quantity`
3. Add a `<span>` element with the `id="cart-total"` to display the total.
4. Implement a JavaScript function that:
   - Listens for changes in quantity
   - Recalculates the total price
   - Updates the content of `#cart-total`

---

### 💻 Example HTML Structure

```html
<div class="cart-item">
  <p>Eco Bottle</p>
  <span class="price" data-price="10.99">$10.99</span>
  <input type="number" class="quantity" value="1" min="1" />
</div>

<div class="cart-item">
  <p>Reusable Bag</p>
  <span class="price" data-price="5.49">$5.49</span>
  <input type="number" class="quantity" value="2" min="1" />
</div>

<h3>Total: $<span id="cart-total">0.00</span></h3>
