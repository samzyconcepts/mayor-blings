const base_url = "https://octopus-app-2uj65.ondigitalocean.app/";

// get categories List
export const getCategoriesURL = () => `${base_url}categories`;

//  get a category detail
export const getCategoryURL = (category_id: number) =>
    `${base_url}categories/category?category_id=${category_id}`;

//  get products in a category
export const getCategoryProductURL = (category_id: number) =>
    `${base_url}category/products?category_id=${category_id}`;

// get all products
export const getProductsURL = () => `${base_url}products`;

// get a product by id
export const getProductURL = (product_id: number) =>
    `${base_url}products/product?product_id=${product_id}`;
