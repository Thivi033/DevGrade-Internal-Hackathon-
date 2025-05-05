describe('Challenge 2: Add Product Item to Website', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="product-list" class="product-grid">
          <div class="product-card">
            <h2 class="product-title">Eco Water Bottle</h2>
            <p class="product-price">$12.99</p>
            <ul class="product-specs">
              <li>500ml capacity</li>
              <li>Made from BPA-free materials</li>
              <li>Keeps drinks cold for 12 hours</li>
            </ul>
          </div>
        </div>
      `;
    });
  
    test('Product card should contain product name', () => {
      const productName = document.querySelector('.product-title');
      expect(productName).not.toBeNull();
      expect(productName.textContent.trim().length).toBeGreaterThan(0);
    });
  
    test('Product card should display product price', () => {
      const productPrice = document.querySelector('.product-price');
      expect(productPrice).not.toBeNull();
      expect(productPrice.textContent.trim().length).toBeGreaterThan(0);
      expect(productPrice.textContent).toMatch(/^\$\d+\.\d{2}$/); // Matches price format like $12.99
    });
  
    test('Product card should display product specifications', () => {
      const productSpecs = document.querySelectorAll('.product-specs li');
      expect(productSpecs.length).toBeGreaterThanOrEqual(3);
      
      // Check that each specification is not empty
      productSpecs.forEach(spec => {
        expect(spec.textContent.trim().length).toBeGreaterThan(0);
      });
    });
  
    test('Product card should be styled properly', () => {
      const productCard = document.querySelector('.product-card');
      expect(productCard).not.toBeNull();
      expect(productCard).toHaveStyle('border: 1px solid #ccc');
      expect(productCard).toHaveStyle('padding: 16px');
    });
}); 