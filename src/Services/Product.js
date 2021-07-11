const ProductAPI = class {
  static async getProducts() {
    const response = await fetch("/src/products.json");

    return await response.json();
  }
};

export const fetchProducts = ProductAPI.getProducts;
