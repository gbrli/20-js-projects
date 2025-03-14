const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

function closeModalHelper() {
    window.addEventListener('click', e =>  {
        if (e.target == modal) {
            modal.classList.remove('show-modal');
        }
    });
}
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

open.addEventListener('click', () => {
    modal.classList.add('show-modal');
    closeModalHelper();
});

close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});
