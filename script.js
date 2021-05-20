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

// add to cart process
let right = document.querySelector(".right");
let productCards = document.querySelectorAll(".products-card");

// add to cart visual representation variables
let cart = [];
const shoppingCart = document.querySelector(".shopping-cart");
let cartWrapper = document.querySelector(".cart-wrapper");
let cartNameHolder = document.querySelector(".cart-product-name");
let cartQuantityHolder = document. querySelector(".cart-change-quanity");
let cartProductPriceHolder = document.querySelector(".cart-product-price");

// add to cart visual representation wiring
// create p tag to insert item.name et al
viewCart.addEventListener("click", (event) => {
    event.preventDefault();
    for (item of cart){
        let cartItemNameDisplay = document.createElement("p");
        cartItemNameDisplay.innerText = item.name;
        cartNameHolder.appendChild(cartItemNameDisplay);
        
        let cartQuantityHolder = "something to fix";

        let cartPriceDisplay = document.createElement("p");
        cartPriceDisplay.innerText = item.price;
        cartProductPriceHolder.appendChild(cartPriceDisplay);
    }
    // let cartToggle = shoppingCart.toggle(".hidden");
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
  
    //new cartObject

    newTotal += parseInt(addPrice) / 100;
    let taxTotal = .06 * newTotal;
    let grandTotal = newTotal + taxTotal;


    // grab selected item
        console.log(subTotal.innerText);
        subTotal.innerText = `Subtotal: ${newTotal}`;
        tax.innerText = `Tax: ${taxTotal}`;
        total.innerText = `Total ${grandTotal}`;

    }
    // add slected item Name & price to cart

})
    // add slected item Name & price to cart

// TERNARY OPERATOR FOR CC VALIDATION! 
// user.input === number ? alert : submit








