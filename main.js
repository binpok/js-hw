class ProductsService {
  static #baseUrl = "https://dummyjson.com/products";

  static fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to propagate it further if needed
    }
  };

  static getAllProducts = async () => {
    return this.fetchData(this.#baseUrl);
  };

  static getProduct = async (id) => {
    return this.fetchData(`${this.#baseUrl}/${id}`);
  };

  static searchProducts = async (search) => {
    const url = new URL(`${this.#baseUrl}/search`);
    url.searchParams.set("q", search);
    return this.fetchData(url);
  };

  static filterProducts = async ({ limit = 10, skip = 0, select = ["title", "price"] } = {}) => {
    const url = new URL(this.#baseUrl);
    url.searchParams.set("limit", limit);
    url.searchParams.set("skip", skip);
    url.searchParams.set("select", select);
    return this.fetchData(url);
  };

  static createProducts = async (product) => {
    const url = new URL(`${this.#baseUrl}/add`);
    return this.fetchData(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  static updateProducts = async (id, product) => {
    const url = new URL(`${this.#baseUrl}/${id}`);
    return this.fetchData(url, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  static deleteProducts = async (id) => {
    const url = new URL(`${this.#baseUrl}/${id}`);
    return this.fetchData(url, { method: "delete" });
  };
}

// Example Usage
ProductsService.getAllProducts();
ProductsService.getProduct(1);
ProductsService.searchProducts("phone");
ProductsService.filterProducts();
ProductsService.createProducts({ title: "My custom Product", price: 0.99 });
ProductsService.updateProducts(1, { title: "My custom Product", price: 0.99 });
ProductsService.deleteProducts(1);

Promise.all([
  ProductsService.deleteProducts(1),
  ProductsService.deleteProducts(2),
  ProductsService.deleteProducts(3),
  ProductsService.deleteProducts(4),
  ProductsService.deleteProducts(3243),
])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
