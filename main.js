 class ProductsService {
    static #baseUrl = "https://dummyjson.com/products";

    // ... your existing code ...

    static async showNotification(type, message) {
      const notification = document.getElementById('notification');
      notification.textContent = message;

      if (type === 'success') {
        notification.classList.remove('error');
        notification.classList.add('success');
      } else {
        notification.classList.remove('success');
        notification.classList.add('error');
      }

      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 1000);
    }

    static async createProductAndNotify(productData) {
      try {
        const response = await this.createProducts(productData);
        this.showNotification('success', 'Product created successfully');
        return response;
      } catch (error) {
        this.showNotification('error', 'Error creating product');
        throw error;
      }
    }

    // Other methods can be similarly modified to include notifications

  }

  // Example Usage
  const productData = { title: "New Product", price: 29.99 };

  ProductsService.createProductAndNotify(productData);
