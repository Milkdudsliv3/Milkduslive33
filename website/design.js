// Get the current cart total
var cartTotal = document.getElementById("cart-total");

// Get the current cart items count
var cartItemsCount = document.getElementById("cart-items-count");

// Add the item price to the cart total
var newCartTotal = parseFloat(cartTotal.innerText) + parseFloat(itemPrice);

// Update the cart total text
cartTotal.innerText = newCartTotal.toFixed(2);

// Update the cart items count
cartItemsCount.innerText = parseInt(cartItemsCount.innerText) + 1;

// Display a confirmation message
alert("Added " + itemName + " to cart!");
}

// This function will submit the contact form
function submitForm() {
// Get the user input values
var nameInput = document.getElementById("name-input");
var emailInput = document.getElementById("email-input");
var messageInput = document.getElementById("message-input");

// Validate the inputs
if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
alert("Please fill out all fields before submitting!");
return false;
}

// Send the form data to the server
// Code to send form data goes here

// Display a confirmation message
alert("Thank you for contacting us!");

// Clear the form inputs
nameInput.value = "";
emailInput.value = "";
messageInput.value = "";
}