const searchInput = document.querySelector("#searchBox");
let products = [];

fetch('http://localhost:3000/products')
.then((response) => response.json())
.then((json) => {
    products = json;
     json.forEach((product) => addProduct(product.title, product.description, product.price, product.category, product.type, product.image));
})
function productDisplay(filter) {
    const items = document.getElementById("product");
    const productCards = items.querySelectorAll(".product-card");
    productCards.forEach(cards => {
        let title =cards.querySelector(".card-title").innerText;

        if(title.includes(filter)) {
            cards.style.display = "block";
        } else {
            cards.style.display = "none"
    }
});
}
searchInput.addEventListener("input", (event) => {
    productDisplay(event.target.value);
});

function addProduct(title, description,price, category, type, image) {
    // cloning the template
    const template = document.getElementById("product-card")
    .content.cloneNode(true);
    
    
    
    // Populating the template
    template.querySelector(".product-image").src = image;
    template.querySelector(".product-image").alt = image;
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = description;
    template.querySelector(".card-price").innerText = price;
    template.querySelector(".category").innerText = category;
    template.querySelector(".type").innerText = type;

    // Append card
    document.getElementById("product").appendChild(template);

    
    
}