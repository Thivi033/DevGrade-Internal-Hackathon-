# 🛒 Challenge 2: Update Cart Total
## 📝 Overview


Challenge 2 focuses on calculating and updating the cart total dynamically as items are added or removed from the shopping cart.

This challenge consists of the following tasks:
##🔧 a. Add Items to the Cart
The cart should allow users to add items with their names, prices, and quantities.

✅ Steps
In your cart page (cart.html), create a form or interface to add items to the cart. Each item should have:

Item name

Item price

Item quantity

When an item is added to the cart, ensure it appears in a list with the following information:

Product Name

Product Price

Quantity

##🔧 b. Update Cart Total
Each time an item is added, removed, or its quantity changes, the cart's total price must be updated dynamically.

✅ Steps
After adding/removing an item, calculate the total price based on the prices and quantities.

Display the updated cart total at the bottom of the cart.

<div class="cart-item">
  <h3 class="item-name">Eco Water Bottle</h3>
  <p class="item-price">$12.99</p>
  <input type="number" class="item-quantity" value="1" />
  <button class="remove-item">Remove</button>
</div>

cart total
<div class="cart-total">
  <h3>Total: $12.99</h3>
</div>
