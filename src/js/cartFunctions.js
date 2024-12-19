import { notificationBar } from "./utils/notificationBar.js"

if (!localStorage.getItem("cartList")) { 
    localStorage.setItem("cartList", JSON.stringify([]))
}
// -------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------- 

export let cartItemCountLS = () => {
    const getLSitems = JSON.parse(localStorage.getItem("cartList"))
    if (getLSitems.length === null || 0) { 
        return 0
    }
    return getLSitems.length
 }
// -------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------- 
// Get the clicked item by id
  export const getById = (data, id) => { 
    
    if (!data) {  // checks if the globaldata variable is populated or not
          console.error("data not loaded yet")
          return null
      } 
        const items = data.find((item) => item.id === id) //if globaldata is populated then find the item with matching id
      if (!items) {                                           // compares the id from the clicked item with and looks for the same one trought globaldata
          console.warn(`item with id:${id} is not found `);
          return null
    } 

    const getCartLS = JSON.parse(localStorage.getItem("cartList"));
    const compareItem = getCartLS.find(repeated => repeated.id === items.id);
    if (compareItem) {

      console.log("Items is already added in your cart. To increase the amount of the same item, please go to your cart.");

    } else { 

      getCartLS.push(items)
      localStorage.setItem("cartList", JSON.stringify(getCartLS))
      cartItemCountLS()
      console.log("item is added to cart");
      notificationBar("Successfully added to cart!");
    }  
        return items
  }
        
// -------------------------------------------------------------------------------------------------- 
// -------------------------------------------------------------------------------------------------- 
// delete from cart function 
export const removeItem = (id) => {
  const getCartLS = JSON.parse(localStorage.getItem("cartList"));
  const newCart = getCartLS.filter(removedItem => removedItem.id !== id);
  localStorage.setItem("cartList", JSON.stringify(newCart));
}


