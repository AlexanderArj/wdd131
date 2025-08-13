const countries = [
    { id: "fc-1888", name: "Estonia", averagerating: 4.5 },
    { id: "fc-2050", name: "Colombia", averagerating: 4.7 },
    { id: "fs-1987", name: "Finland", averagerating: 3.5 },
    { id: "ac-2000", name: "Brazil", averagerating: 3.9 },
    { id: "jj-1969", name: "Netherlands", averagerating: 5.0 }
];

function countryOptions() {
    const select = document.getElementById("country");
    if (!select) return;

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country.name.toLowerCase();
        option.textContent = country.name;
        select.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    countryOptions();

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
            const mensajeDeError = document.getElementById('rating-message');
            if (mensajeDeError) mensajeDeError.textContent = '';
        });
    });
});
