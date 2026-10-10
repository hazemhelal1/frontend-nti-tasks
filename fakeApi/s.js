let x = new XMLHttpRequest();

x.open("GET", "https://fakestoreapi.com/products?limit=10", false);
x.send();

if (x.readyState === 4 && x.status === 200) {
    let products = JSON.parse(x.responseText);

    document.getElementById("products").innerHTML = products.map((product) => `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <b>$${product.price}</b>
        </div>
    `).join("");
}
