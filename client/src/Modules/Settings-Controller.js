export default function addSettings(ctx) {
    window.addEventListener('change', () => {
        const colorInput = document.querySelector('#colorInput');
        const sizeInput = document.querySelector('#sizeInput');

        let newColor = colorInput.value;
        let newSize = sizeInput.value;

        ctx.strokeStyle = newColor;
        ctx.lineWidth = newSize;
    });
}