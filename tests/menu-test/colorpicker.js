document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.getElementById("colorInput");
    const hexInput = document.getElementById("hexInput");
    const removeColor = document.getElementById("removeColor");

    function updateColorElements(color) {
        // Garante que o valor seja sempre um código hexadecimal com # e 6 caracteres após
        color = color.toUpperCase();
        colorInput.parentElement.style.backgroundColor = color;
        hexInput.value = color;
    }

    // Atualiza ao mudar o seletor de cor
    colorInput.addEventListener("input", function () {
        updateColorElements(colorInput.value);
    });

    // Atualiza ao digitar um código HEX
    hexInput.addEventListener("input", function () {
        let color = hexInput.value;

        // Verifica se a cor é válida
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            updateColorElements(color);
            colorInput.value = color;
        } else {
            // Caso o valor não seja válido, nada acontece (pode adicionar um feedback visual se necessário)
        }
    });

    // Remove a cor (define para transparente ou branco)
    removeColor.addEventListener("click", function () {
        updateColorElements("#FFFFFF");
        colorInput.value = "#FFFFFF";
    });

    // Cor inicial padrão
    updateColorElements("#FF0000");
});
