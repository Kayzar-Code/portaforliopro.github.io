//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}
const colorInput = document.getElementById('color-input');
const hexValue = document.getElementById('hex-value');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');

colorInput.addEventListener('input', updateColor);

            function updateColor() {
              const colorInput = document.getElementById('color');
              const colorPreview = document.getElementById('color-preview');
              const hexDisplay = document.getElementById('hex');
              const rgbDisplay = document.getElementById('rgb');
              const colorVersions = document.getElementById('color-versions');
        
              const selectedColor = colorInput.value;
              colorPreview.style.backgroundColor = selectedColor;
        
              const hexValue = selectedColor.toUpperCase();
              hexDisplay.textContent = hexValue;
        
              const rgbValue = hexToRgb(selectedColor);
              rgbDisplay.textContent = `(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
        
              showColorVersions(selectedColor);
            }
        
            function hexToRgb(hex) {
              // Elimina el '#' si está presente
              hex = hex.replace(/^#/, '');
        
              // Parsea el valor hexadecimal
              const bigint = parseInt(hex, 16);
        
              // Extrae los componentes RGB
              const r = (bigint >> 16) & 255;
              const g = (bigint >> 8) & 255;
              const b = bigint & 255;
        
              return { r, g, b };
            }
        
            function showColorVersions(color) {
              const colorVersions = document.getElementById('color-versions');
              colorVersions.innerHTML = '';
        
              const monochromaticColors = generateMonochromaticColors(color);
              displayColorGroup('Monocromático', monochromaticColors);
        
              const complementaryColor = generateComplementaryColor(color);
              displayColorGroup('Complementario', [complementaryColor]);
        
              const splitComplementaryColors = generateSplitComplementaryColors(color);
              displayColorGroup('Complementarios Divididos', splitComplementaryColors);
        
              const analogousColors = generateAnalogousColors(color);
              displayColorGroup('Análogos', analogousColors);
            }
        
            function generateMonochromaticColors(color) {
              const baseColor = hexToRgb(color);
              const step = 30;
        
              const variations = [];
        
              for (let i = 0; i < 5; i++) {
                const newColor = {
                  r: Math.min(baseColor.r + i * step, 255),
                  g: Math.min(baseColor.g + i * step, 255),
                  b: Math.min(baseColor.b + i * step, 255),
                };
        
                variations.push(rgbToHex(newColor.r, newColor.g, newColor.b));
              }
        
              return variations;
            }
        
            function generateComplementaryColor(color) {
              const baseColor = hexToRgb(color);
        
              const complementaryColor = {
                r: 255 - baseColor.r,
                g: 255 - baseColor.g,
                b: 255 - baseColor.b,
              };
        
              return rgbToHex(complementaryColor.r, complementaryColor.g, complementaryColor.b);
            }
        
            function generateSplitComplementaryColors(color) {
              const baseColor = hexToRgb(color);
              const step = 30;
        
              const variations = [];
        
              for (let i = 1; i <= 2; i++) {
                const newColor = {
                  r: Math.min(baseColor.r + i * step, 255),
                  g: Math.min(baseColor.g + i * step, 255),
                  b: Math.min(baseColor.b + i * step, 255),
                };
        
                variations.push(rgbToHex(newColor.r, newColor.g, newColor.b));
              }
        
              return variations;
            }
        
            function generateAnalogousColors(color) {
              const baseColor = hexToRgb(color);
              const step = 30;
        
              const variations = [];
        
              for (let i = -1; i <= 1; i++) {
                if (i !== 0) {
                  const newColor = {
                    r: Math.min(Math.max(baseColor.r + i * step, 0), 255),
                    g: Math.min(Math.max(baseColor.g + i * step, 0), 255),
                    b: Math.min(Math.max(baseColor.b + i * step, 0), 255),
                  };
        
                  variations.push(rgbToHex(newColor.r, newColor.g, newColor.b));
                }
              }
        
              return variations;
            }
        
            function rgbToHex(r, g, b) {
              return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }
        
            function componentToHex(c) {
              const hex = c.toString(16);
              return hex.length === 1 ? '0' + hex : hex;
            }
        
            function displayColorGroup(groupName, colors) {
              const colorVersions = document.getElementById('color-versions');
              const groupTitle = document.createElement('h4');
              groupTitle.textContent = groupName;
              colorVersions.appendChild(groupTitle);
        
              colors.forEach(c => {
                const colorBox = document.createElement('div');
                colorBox.style.backgroundColor = c;
                colorBox.className = 'color-box';
                colorVersions.appendChild(colorBox);
              });
            }
          
