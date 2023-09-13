

let cart = [];
let totalPrice = 0;
const maxCartItems = 8; // Maximum number of items in the cart

function addItem(event) {
    const itemId = event.target.getAttribute("data-id");
    const itemName = event.target.parentElement.querySelector(".card-title").textContent;
    const itemPrice = getItemPrice(itemId);

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        // If the item is already in the cart, check if adding it will exceed the limit
        if (existingItem.quantity < maxCartItems) {
            existingItem.quantity++;
            totalPrice += itemPrice;
            updateCartUI();
        } else {
            alert("You have reached the maximum quantity for this item in the cart.");
        }
    } else {
        // If the item is not in the cart, check if adding it will exceed the limit
        if (cart.length < maxCartItems) {
            cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
            totalPrice += itemPrice;
            updateCartUI();
        } else {
            alert("Cart is full. You cannot add more items.");
        }
    }
}








function getItemPrice(itemId) {
    // Replace this function with your logic to fetch item prices by ID
    // For example, you could use an object or an API call to get prices.
    switch (itemId) {
        case "1":
            return 2;
        case "2":
            return 3;
        case "3":
            return 2;
           
            case "4":
                return 3;
            
                case "5":
                    return 2;
            
                    case "6":
                        return 3;
                        
                        case "7":
                            return 2;
                            
        // Add more cases for other items
        default:
            return 0;
    }
}

function updateCartUI() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear the cart items before updating
    cartItemsElement.innerHTML = "";

    // Loop through the cart and display items and quantities
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`;
        cartItemsElement.appendChild(li);
    });

    // Update the total price
    cartTotalElement.textContent = `$${totalPrice}`;
}