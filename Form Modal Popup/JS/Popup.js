const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Simple for open and close...using arrow funtion here
openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    openBtn.style.opacity = 0;

    // console.log('Modal opened');
});

function closeModal() {
    modal.classList.remove('show');
    openBtn.style.opacity = 1;

    // console.log('Modal closed');
}

// ---------------------------------------------------------
// Adding EventListener...
closeBtn.addEventListener('click', closeModal);

// ---------------------------------------------------------
// If user presses Escape key or click anywhere outside the modal-box (means in the whole overlay)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
