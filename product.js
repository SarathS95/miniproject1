fetch('http://localhost:3000/products')
.then((response) => response.json())
.then((json) =>{
     json.forEach((product) => addProduct(product.title, product.description, product.price, product.category, product.type, product.image));
})
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