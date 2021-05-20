// const section = document.querySelectorAll("section");
// right.addEventListener("scroll", (event) => {
//     console.log("scrolled");
//     // for animated sticky scroll??
// })

// left side totals & purchasing variables
let subTotal = document.querySelector(".sub-total");
let tax = document.querySelector(".tax");
let total = document.querySelector(".total");
let viewCart = document.querySelector(".view-cart");
let addToCart = document.querySelectorAll(".add-to-cart-button");
let newTotal = 0;

// TEST - SAME AS ABOVE BUT TRYING TO ADD TOTALS TO CART SIMULTANEOUSLY

// add to cart process
let right = document.querySelector(".right");
let productCards = document.querySelectorAll(".products-card");

// add to cart visual representation variables
let cart = [];
let cartSubTotal = document.querySelector(".cart-sub-total");
let cartTax = document.querySelector(".cart-tax");
let cartTotal = document.querySelector(".cart-total");
let cartWrapper = document.querySelector(".cart-wrapper");
let cartNameHolder = document.querySelector(".cart-product-name");
let cartQuantityHolder = document. querySelector(".cart-change-quanity");
let cartProductPriceHolder = document.querySelector(".cart-product-price");
// IMPORTANT FOR CLASS
const shoppingCart = document.querySelector(".hidden");
// IMPORTANT FOR CLASS



// toggles shopping cart view
viewCart.addEventListener("click", (event) => {
    event.preventDefault();
    let cartToggle = () => shoppingCart.classList.toggle("shopping-cart");
    cartToggle();
});





// add to cart event
right.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart-button")){
        const addPrice = event.target.getAttribute("data-price")
        const addName = event.target.getAttribute("data-name");
        let newCartObject = {}
            newCartObject.name = addName;
            newCartObject.price = addPrice;
            cart.push(newCartObject);
            console.log(cart);

        
        // generate name box
        let cartItemNameDisplay = document.createElement("p");
        cartItemNameDisplay.innerText = addName;
        cartNameHolder.appendChild(cartItemNameDisplay);
        // generate quantity box
        let cartQuantityContainer = document.querySelector(".cart-change-quantity-container");
        let cartQuantity = document.querySelector(".cart-change-quantity");
        let quantityBox = cartQuantity.cloneNode(true);
        cartQuantityContainer.appendChild(quantityBox);

        // generate price box
        let cartPriceDisplay = document.createElement("p");
        cartPriceDisplay.innerText = addPrice;
        cartProductPriceHolder.appendChild(cartPriceDisplay);
        

        // add in if name === name, item.quantity++, else create new object


        newTotal += parseInt(addPrice) / 100;
        let taxTotal = .06 * newTotal;
        let grandTotal = newTotal + taxTotal;


        // All totals display
        subTotal.innerText = `Subtotal: $${newTotal}`;
        tax.innerText = `Tax: $${taxTotal}`;
        total.innerText = `Total $${grandTotal}`;
        cartSubTotal.innerText = `Subtotal: $${newTotal}`;
        cartTax.innerText = `Tax: $${taxTotal}`;
        cartTotal.innerText = `Total $${grandTotal}`;

    }
    // add slected item Name & price to cart
    

})
    // add slected item Name & price to cart

// TERNARY OPERATOR FOR CC VALIDATION! 
// user.input === number ? alert : submit








