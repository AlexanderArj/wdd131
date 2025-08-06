const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function productOptions() {
    const select = document.getElementById("product");
    if (!select) return;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    productOptions();
    const form = document.querySelector('.review-form');
    const stars = form.querySelectorAll('input[name="stars"]');

    
    form.addEventListener('submit', e => {
        const seleccionado = form.querySelector('input[name="stars"]:checked');
        const mensajeDeError = document.getElementById('rating-message');

        mensajeDeError.textContent = '';

        if (!seleccionado) {
            e.preventDefault();

            mensajeDeError.textContent = 'Please complete the star rating.';
            mensajeDeError.style.color = 'red';
            mensajeDeError.style.textAlign = 'center';
        }
    });

    stars.forEach(radio => {
        radio.addEventListener('change', () => {
            const errorP = document.querySelector('.error-message');
            if (errorP) errorP.remove();
        });
    });
});
