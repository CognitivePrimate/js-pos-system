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

// shopping cart overlay visual representation variables
let cart = [];
let cartSubTotal = document.querySelector(".cart-sub-total");
let cartTax = document.querySelector(".cart-tax");
let cartTotal = document.querySelector(".cart-total");
let cartWrapper = document.querySelector(".cart-wrapper");
let cartNameHolder = document.querySelector(".cart-product-name");
let cartNameHolderArray = document.querySelectorAll(".cart-product-name");
let cartQuantityHolder = document. querySelector(".cart-change-quanity");
let cartProductPriceHolder = document.querySelector(".cart-product-price");
let cartProductQuantity = document.querySelector(".cart-product-quantity");
const shoppingCart = document.querySelector(".hidden");





// toggles shopping cart visibility
viewCart.addEventListener("click", (event) => {
    event.preventDefault();
    let cartToggle = () => shoppingCart.classList.toggle("shopping-cart");
    cartToggle();
});




// ***CAN I ADD EVENT LISTENER HERE FOR QUANTITY CHANGE IN CART SINCE CART IS IN RIGHT HTML??
// add to cart event
right.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart-button")){
        const addPrice = event.target.getAttribute("data-price")
        let addName = event.target.getAttribute("data-name");
        // can't initialize below
        // const newCartObjectQuantity = newCartObject.quantity;
        
        let newCartObject = {}
            newCartObject.name = addName;
            newCartObject.price = addPrice;
            newCartObject.quantity = 0;


        // increase quantity for item multiples in cart array
        // also prevents from creating new cart array object
        let alreadyInCart = false;
        for (item of cart){
            if (addName === item.name){
                alreadyInCart = true
                item.quantity++;
                mathPrice = parseInt(item.price);
                item.price = mathPrice + mathPrice;
                cartProductQuantity.innerText = item.quantity;
                break;
            };
        }
        // use indexOf to find index of item for quantity?
        if (alreadyInCart == false){
            newCartObject.quantity = 1;
            cart.push(newCartObject);
             // generate price box in shopping cart overlay
            let cartPriceDisplay = document.createElement("p");
            cartPriceDisplay.innerText = `$${(addPrice) / 100}`;
            cartProductPriceHolder.appendChild(cartPriceDisplay);
             // generate name box
            let cartItemNameDisplay = document.createElement("p");
            cartItemNameDisplay.innerText = addName;
            cartNameHolder.appendChild(cartItemNameDisplay);
        
            // generate quantity box
            let cartQuantityContainer = document.querySelector(".cart-change-quantity-container");
            let cartQuantity = document.querySelector(".cart-change-quantity");
            let quantityBox = cartQuantity.cloneNode(true);
            cartQuantityContainer.appendChild(quantityBox);

            // remove extra quantity box
            let cartQuantityArray = document.querySelectorAll(".cart-change-quantity");
            console.log(cartQuantityArray.length);
            cartQuantityArray.length > cart.length ? cartQuantityArray.pop() : console.log("meow");


            // update price box

                
        };
        console.log(cart);
        // console.log(cartProductPriceArrray);
        // console.log(cartProductPriceHolder.innerHTML.length);
        


       

        // remove extra quantity box --- NEEDS FIXING STILL -- 
        // let cartQuantityList = document.querySelectorAll(".cart-change-quantity");
        // console.log(cartQuantityList);
        // for (let i = 0; i > cartQuantityList.length; i++){
        //     cartQuantityList.pop();
        // }
    


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
    // TODO Figure out how to make ad subtract quantity buttons work -- maybe change event target focus to larger? does shopping cart z index affect?
    if (event.target.classList.contains(".subtract")){
        console.log("subtract");
    };
    
    

})

// TESTS VARIOUS

// TERNARY OPERATOR FOR CC VALIDATION! 
// user.input === number ? alert : submit








