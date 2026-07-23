// Get elements
let plus = document.querySelectorAll(".fa-plus");
let minus = document.querySelectorAll(".fa-minus");
let remove = document.querySelectorAll(".fa-trash");
let hearts = document.querySelectorAll(".fa-heart");


// Calculate total price
function totalPrice() {

    let products = document.querySelectorAll(".card");
    let total = 0;

    products.forEach(product => {

        let price = parseFloat(
            product.querySelector(".unit-price").textContent
        );

        let quantity = Number(
            product.querySelector(".quantity").textContent
        );

        total += price * quantity;
    });

    document.querySelector(".total").textContent = total + " $";
}


// Plus button
plus.forEach(btn => {

    btn.addEventListener("click", () => {

        let quantity = btn.parentElement.querySelector(".quantity");

        quantity.textContent++;

        totalPrice();
    });
});


// Minus button
minus.forEach(btn => {

    btn.addEventListener("click", () => {

        let quantity = btn.parentElement.querySelector(".quantity");

        if (quantity.textContent > 0) {
            quantity.textContent--;
        }

        totalPrice();
    });
});


// Delete button
remove.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.closest(".card").remove();

        totalPrice();
    });
});


// Like button
hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {
            heart.style.color = "red";
        } else {
            heart.style.color = "black";
        }

    });
});


// Display initial total
totalPrice();