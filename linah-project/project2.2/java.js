// Initialize an empty array to store cart items
var cartItems = [];

// Function to add a product to the cart
function addToCart(productName) {
    cartItems.push(productName); // Add the product name to the cart array
    updateCart(); // Call the updateCart function to display the updated cart items
}

// Function to update the cart display
function updateCart() {
    var cartItemsElement = document.getElementById("cartItems");
    cartItemsElement.innerHTML = ""; // Clear the existing cart items

    // Iterate over the cart items array and create a list item for each item
    for (var i = 0; i < cartItems.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = cartItems[i];
        cartItemsElement.appendChild(listItem);
    }
}

// Function to handle the checkout process
function checkout() {
    // Perform necessary steps for payment processing, such as contacting a payment gateway
    // You would typically need server-side scripting and a payment gateway integration to handle this process
    alert("Thank you for your purchase!");
    cartItems = []; // Clear the cart after successful checkout
