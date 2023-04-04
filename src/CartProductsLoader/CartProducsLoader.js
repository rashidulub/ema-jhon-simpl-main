const CartProductsLoader= async()=>{
    const loadProducts =await fetch('products.json');
    const products = await loadProducts.json();
    console.log(products);
    return products;
}




export default CartProductsLoader;