async function loadProducts() {
    let response = await fetch("catalog.json");
    let products = await response.json();

    let container = document.getElementById("products");

    for (let item of products) {
        container.innerHTML += `
            <div class="product-card">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" alt="${item.title}">
                    <b class="pila">${item.title}</b>
                </a>
            </div>
        `;
    }
}

loadProducts();
