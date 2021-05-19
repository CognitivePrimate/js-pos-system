const section = document.querySelectorAll("section");
const right = document.querySelector(".right");
right.addEventListener("scroll", (event) => {
    console.log("scrolled");
})

// left side totals & purchasing variables
let subtotal = document.querySelector(".subtotal");
let tax = document.querySelector(".tax");
let total = document.querySelector(".total");
let viewCart = document.querySelector(".view-cart");
let addToCart = document.querySelectorAll(".add-to-cart-button");

viewCart.addEventListener("click", event => {
    event.preventDefault();
    document.createElement("div").setAttribute("class", "cartCard");
    console.log("clicked");
    console.log(queryselector(".cartCard"))
});

// add to cart event
right.addEventListener("click", (event) => {
    const addPrice = event.target.getAttribute("data-price");
    const addName = event.target.getAttribute("data-name");

    
    // test
    let newTotal = 0;
        newTotal += addPrice;
    // test

    if (event.target.classList.contains("add-to-cart-button")){
        subtotal.innerText = `Subtotal: $${newTotal}`;
        tax.innerText = `Sales Tax: $${newTotal * .06}`;
        
        
        console.log(parseInt(subtotal.innerText));
        total.innerText = `Total: ${parseInt(tax.innerText) + parseInt(subtotal.innerText)}`;
    }
    console.log(subtotal);
    console.log(subtotal.innerText);
    console.log(subtotal.innerText);
    console.log(add-to-cart-button.length);
    // add slected item Name & price to cart

})








