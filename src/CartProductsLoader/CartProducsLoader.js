import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader= async()=>{
    const loadProducts =await fetch('products.json');
    const products = await loadProducts.json();
    // console.log(products);
    const storeCart = getShoppingCart();
    const saveCart =[];
   

    for(const id in storeCart){
    const addedProduct = products.find(pd=>pd.id ===id)
    if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity=quantity;
        saveCart.push(addedProduct);
    }

    }
    return saveCart;
}




export default CartProductsLoader;