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
let cartPriceDisplay = document.createElement("p");

// cart quantity container variables
let cartQuantityContainer = document.querySelector(".cart-change-quantity-container");
const shoppingCart = document.querySelector(".hidden");
let cartQuantity = document.querySelector(".cart-change-quantity");


// checkout menu total displays
const checkoutMenu = document.querySelector(".checkout-hidden");
let checkOutTotalDisplay = document.querySelector(".final-check-out-total");
let checkOutTaxDisplay = document.querySelector(".final-check-out-tax");
let checkOutSubtotalDisplay = document.querySelector(".final-check-out-subtotal");
let checkOutCashInput = document.querySelector("#cash");
console.log(checkOutCashInput.value);
let checkOutChangeDisplay = document.querySelector(".change");
// function to call total outside of listener scope and insert into checkout overlay
// let change = () => parseInt(checkOutTotalDisplay) - parseInt(checkOutCashInput);

checkoutMenu.addEventListener("click", (event) => {
    function change(){
        for (item of cart){
            let newTotal = 0;
            newTotal += (item.value * item.quantity);
            let cashGiven = checkOutCashInput.value;
            console.log(checkOutCashInput.value);
            let changeDisplay = newTotal - cashGiven;
            checkOutChangeDisplay.innerText = `Change: ${changeDisplay}`;

        };
    };
});

// checkOutChangeDisplay.innerText = `Change: $${change()}`;

// TESTS
console.log(parseInt(checkOutTotalDisplay.innerText));



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
        addPrice = event.target.getAttribute("data-price")
        addName = event.target.getAttribute("data-name");
       
        // creating new object for cart array
        let newCartObject = {}
        newCartObject.name = addName;
        newCartObject.price = addPrice;
        newCartObject.quantity = 1;
        
        // increase quantity for item multiples in cart array
        // also prevents from creating new cart array object
         let alreadyInCart = false;

        // GENERATE QUANTITY BOXES FOR SHOPPING CART
        // create quantity box variables && appends for shopping cart display
         let createBox = document.createElement("div");
         createBox.setAttribute("class", "cart-change-quantity");

        // add left arrow to box
        let leftArrow = document.createElement("i");
        leftArrow.setAttribute("class", "ib ib-mdi-arrow-left-circle subtract");
        createBox.appendChild(leftArrow);

        // add quantity box to box
        let cartProductQuantityCreator = document.createElement("span");
        cartProductQuantityCreator.setAttribute("class", "cart-product-quantity");
        cartProductQuantityCreator.innerText = newCartObject.quantity;
        createBox.appendChild(cartProductQuantityCreator);

        // add right arrow to box
        let rightArrow = document.createElement("i");
        rightArrow.setAttribute("class", "ib ib-mdi-arrow-right-circle add");
        createBox.appendChild(rightArrow);    

            // updates cart values for repeat items without creating new line
            for (item of cart){
                if (addName === item.name){
                    alreadyInCart = true
                    item.quantity++;
                    // ****ASK KYLE WHY CART QUANTITY BOX WON"T UPDATE****
                    // console.log(cartProductQuantity);
                    // cartProductQuantity.innerText = item.quantity;
                   
                   

                    
                    mathPrice = parseInt(item.price);
                    item.price = mathPrice + mathPrice;
                        
                    
                    cartPriceDisplay.innerText = `$${(addPrice) * item.quantity / 100}`;
                    // updating total on checkout display
                    checkOutTotalDisplay.innerText = cartPriceDisplay.innerText;
                    break;
                };        
            };       
    
            if (alreadyInCart == false){
                // insert quantity boxes into shopping cart
                cartQuantityContainer.appendChild(createBox);      
        
                // newCartObject.quantity = 1;
                // cartProductQuantity.innerText = newCartObject.quantity;
                cart.push(newCartObject);
                // generate price box in shopping cart overlay
                cartPriceDisplay = document.createElement("p");
                cartPriceDisplay.innerText = `$${(addPrice) / 100}`;
                cartProductPriceHolder.appendChild(cartPriceDisplay);
                // updating total on checkout display
                checkOutTotalDisplay.innerText = cartPriceDisplay.innerText;
                // generate name box
                let cartItemNameDisplay = document.createElement("p");
                cartItemNameDisplay.setAttribute("class", "name-in-cart")
                cartItemNameDisplay.innerText = addName;
                cartNameHolder.appendChild(cartItemNameDisplay);
            };    
       
        console.log(cart);
    
        // totals math
        newTotal += parseInt(addPrice) / 100;
        let taxTotal = .06 * newTotal;
        let grandTotal = newTotal + taxTotal;

        // All totals display
        subTotal.innerText = `Subtotal: $${newTotal.toFixed(2)}`;
        tax.innerText = `Tax: $${taxTotal.toFixed(2)}`;
        total.innerText = `Total $${grandTotal}`;
        cartSubTotal.innerText = `Subtotal: $${newTotal}`;
        cartTax.innerText = `Tax: $${taxTotal.toFixed(2)}`;
        cartTotal.innerText = `Total $${grandTotal}`;
        checkOutTotalDisplay.innerText = total.innerText;
        checkOutTaxDisplay.innerText = tax.innerText;
        checkOutSubtotalDisplay.innerText = subTotal.innerText; 
    };            

        // TODO Figure out how to make add subtract quantity buttons work -- maybe change event target focus to larger? does shopping cart z index affect?
        if (event.target.classList.contains("subtract")){
            
            console.log(cartNameHolderArray);
        };

        if (event.target.classList.contains("add")){
            
        };

        // opens checkout menu overlay
        if (event.target.classList.contains("check-out-button")){
            checkoutMenu.classList.toggle("check-out-menu");
        };

        // closes checkoutmenu overlay
        if (event.target.classList.contains("back-to-cart")){
            console.log("yo");
            checkoutMenu.classList.toggle("check-out-menu");
        };
        


});

// TESTS VARIOUS

// TERNARY OPERATOR FOR CC VALIDATION! 
// user.input === number ? alert : submit
