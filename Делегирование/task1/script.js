const previewBox = document.querySelector('.preview-box');
const colorGrid = document.querySelector('.color-grid');

colorGrid.addEventListener('click', (e) => {
    if (e.target.matches('.color-card')) {
        const color = e.target.dataset.color;
        previewBox.style.backgroundColor = color;
    }
})