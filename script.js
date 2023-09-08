const colorInput = document.getElementById('color-input');
const hexValue = document.getElementById('hex-value');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');

colorInput.addEventListener('input', updateColor);

function updateColor() {
    const selectedColor = colorInput.value;
    hexValue.textContent = selectedColor;
    const rgbValues = hexToRgb(selectedColor);
    redValue.textContent = rgbValues.r;
    greenValue.textContent = rgbValues.g;
    blueValue.textContent = rgbValues.b;

    displayColorCombinations(rgbValues);
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function displayColorCombinations(rgbValues) {
    const { r, g, b } = rgbValues;

    // Monocromáticos
    const monoColors = [
        `rgb(${r}, ${g}, ${b})`,
        `rgb(${Math.floor(r * 0.8)}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`,
        `rgb(${Math.floor(r * 0.6)}, ${Math.floor(g * 0.6)}, ${Math.floor(b * 0.6)})`
    ];

    const monochromaticDiv = document.getElementById('monochromatic-circle');
    monochromaticDiv.style.backgroundColor = monoColors[0];
    monochromaticDiv.querySelector('p').textContent = 'Monocromático';

    // Complementario
    const complementaryColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    const complementaryDiv = document.getElementById('complementary-circle');
    complementaryDiv.style.backgroundColor = complementaryColor;
    complementaryDiv.querySelector('p').textContent = 'Complementario';

    // Complementarios divididos
    const splitComplementaryColors = [
        complementaryColor,
        `rgb(${Math.floor(r * 0.8)}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`,
        `rgb(${Math.floor(r * 0.6)}, ${Math.floor(g * 0.6)}, ${Math.floor(b * 0.6)})`
    ];

    const splitComplementaryDiv = document.getElementById('split-complementary-circle');
    splitComplementaryDiv.style.backgroundColor = splitComplementaryColors[0];
    splitComplementaryDiv.querySelector('p').textContent = 'Complementarios divididos';

    // Análogos
    const analogousColors = [
        `rgb(${r}, ${g}, ${b})`,
        `rgb(${r}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`,
        `rgb(${r}, ${Math.floor(g * 0.6)}, ${Math.floor(b * 0.6)})`
    ];

    const analogousDiv = document.getElementById('analogous-circle');
    analogousDiv.style.backgroundColor = analogousColors[0];
    analogousDiv.querySelector('p').textContent = 'Análogos';
}

// Llamada inicial para mostrar los valores predeterminados
updateColor();
