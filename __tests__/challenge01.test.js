describe('Challenge 1: Site Title Customization', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <html>
          <head>
            <title>ShopMaster - Mini E-commerce Challenge</title>
          </head>
          <body>
            <h1 id="site-title">ShopMaster</h1>
            <p id="tagline">Your One-Stop Shopping Solution</p>
          </body>
        </html>
      `;
    });
  
    test('Site title should be updated from the default "ShopMaster"', () => {
      const siteTitle = document.getElementById('site-title');
      expect(siteTitle).not.toBeNull();
      expect(siteTitle.textContent).not.toBe('ShopMaster');
    });
  
    test('Document title (tab title) should be customized', () => {
      expect(document.title).not.toBe('ShopMaster - Mini E-commerce Challenge');
    });
  
    test('Tagline should be present and not empty', () => {
      const tagline = document.getElementById('tagline');
      expect(tagline).not.toBeNull();
      expect(tagline.textContent.trim().length).toBeGreaterThan(0);
      expect(tagline.textContent).not.toBe('Your One-Stop Shopping Solution');
    });
}); 