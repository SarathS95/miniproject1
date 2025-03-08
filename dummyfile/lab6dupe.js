fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((json) => {
    json.slice(0, 10).forEach((newsItem) => addNews(newsItem.title, newsItem.description, newsItem.price, newsItem.category));
});
// .then((json) => console.log(json))

function addNews(title, description, price, category) {
    console.log(addNews);
    //cloning template
    const template = document
      .getElementById("news-template")
      .content.cloneNode(true);
    // cloning template with news
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = description;
    template.querySelector(".card-category").innerText = category;
    template.querySelector(".card-price").innerText = price;
    // append populated card
    document.getElementById("news-list").appendChild(template);
  }