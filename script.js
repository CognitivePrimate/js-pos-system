const section = document.querySelectorAll("section");
const right = document.querySelector(".right");
right.addEventListener("scroll", (event) => {
    console.log("scrolled");
})

// left side totals & cart
let subtotal = document.querySelector(".subtotal").innerText;
let tax = document.querySelector(".tax").innerText;
let total = document.querySelector(".total");
let viewCart = document.querySelector(".viewCart");

viewCart.addEventListener("click", event => {
    event.preventDefault();
    document.createElement("div").setAttribute("class", "cartCard");
    console.log("clicked");
    console.log(queryselector(".cartCard"))
});








