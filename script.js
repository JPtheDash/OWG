document.addEventListener("DOMContentLoaded", () => {
    const paper = document.getElementById('paper');

    paper.addEventListener('click', (event) => {
        const rect = paper.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Example: Simple diagonal fold when clicking top right corner
        if (x > rect.width / 2 && y < rect.height / 2) {
            paper.style.transform = 'rotate(45deg) scale(0.5)';
            paper.style.transition = 'transform 0.5s';
        }
    });
});
