// ========================================
// ACORDEÃO DOS TERMOS
// ========================================

// Seleciona todos os botões dos termos
const termButtons =
    document.querySelectorAll(".term-button");


// Percorre cada botão
termButtons.forEach(function(button) {

    // Adiciona um evento de clique
    button.addEventListener("click", function() {

        // Encontra o elemento "article"
        // que contém o botão clicado
        const term =
            button.parentElement;


        // Abre ou fecha o termo
        term.classList.toggle("active");

    });

});


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const backToTop =
    document.getElementById("back-to-top");


// Detecta quando o usuário rola a página
window.addEventListener("scroll", function() {

    // Se o usuário descer mais de 500 pixels
    if (window.scrollY > 500) {

        // Mostra o botão
        backToTop.style.display = "flex";

        backToTop.style.alignItems = "center";

        backToTop.style.justifyContent = "center";

    } else {

        // Esconde o botão
        backToTop.style.display = "none";

    }

});


// Quando clicar no botão
backToTop.addEventListener("click", function() {

    // Volta suavemente para o topo
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const currentYear =
    document.getElementById("current-year");


// Pega o ano atual automaticamente
currentYear.textContent =
    new Date().getFullYear();