const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("catalog.json")
    .then(res => res.json())
    .then(products => {
        const product = products.find(p => p.id == id);

        if (!product) {
            document.body.innerHTML = "Товар не найден";
            return;
        }

        document.getElementById("title").textContent = product.title;
        document.getElementById("image").src = product.img;
        document.getElementById("description").textContent = product.description;
        document.getElementById("recommendations").textContent = product.recommendations;
        const details = document.getElementById("details");
        details.innerHTML = "";

        for (let key in product.details) {
            const li = document.createElement("li");
            li.innerHTML = `<b>${key}:</b> ${product.details[key]}`;
            details.appendChild(li);
        }
        document.getElementById("price").textContent = product.price;
    });
