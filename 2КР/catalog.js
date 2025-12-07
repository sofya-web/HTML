async function loadProducts() {
    let response = await fetch("catalog.json");
    let products = await response.json();

    let container = document.getElementById("products");

    for (let item of products) {

        container.innerHTML += `
            <div class="product-card">
                <a href="index.html">
                    <img src="${item.img}" alt="${item.title}">
                    <b class="pila">${item.title}</b>
                </a>

                <div class="product-form">
                    <label>Количество:
                        <input type="number" name="${item.title}" min="0" max="100" value="0" required>
                    </label>
                </div>
            </div>
        `;
    }
}

loadProducts();
