export const calculateTotalItems = (cartItems) => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return totalItems;
  };