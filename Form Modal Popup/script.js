const openBtn = document.getElementById('openBtn');

const closeBtn = document.getElementById('closeBtn');

const okBtn = document.getElementById('okBtn');

const modal = document.getElementById('modal');

const productId = document.getElementById('productId');
const nameField = document.getElementById('name');
const price = document.getElementById('price');
const city = document.getElementById('city');

const modalProductId = document.getElementById('modalProductId');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalCity = document.getElementById('modalCity');

openBtn.addEventListener('click', function () {
    modalProductId.textContent = 'Product Id : ' + productId.value;

    modalName.textContent = 'Name : ' + nameField.value;

    modalPrice.textContent = 'Price : ' + price.value;

    modalCity.textContent = 'Shipped To : ' + city.value;

    modal.classList.add('show');
});

function closeModal() {
    modal.classList.remove('show');
}

closeBtn.addEventListener('click', closeModal);

okBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
