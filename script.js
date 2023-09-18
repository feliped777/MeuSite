// Obtém uma referência ao botão e ao menu
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Adiciona um ouvinte de evento de mouseover (passar o mouse) ao botão
menuButton.addEventListener('mouseover', function() {
    // Exibe o menu quando o mouse estiver sobre o botão
    menu.style.display = 'block';
});

// Adiciona um ouvinte de evento de mouseout (retirar o mouse) ao botão
menuButton.addEventListener('mouseout', function(event) {
    // Verifica se o mouse está realmente saindo do botão
    if (!event.relatedTarget || !menu.contains(event.relatedTarget)) {
        // Oculta o menu se o mouse não estiver sobre a div do menu
        menu.style.display = 'none';
    }
});

// Adiciona um ouvinte de evento de mouseover (passar o mouse) à div do menu
menu.addEventListener('mouseover', function() {
    // Mantém o menu visível quando o mouse estiver sobre a div do menu
    menu.style.display = 'block';
});

// Adiciona um ouvinte de evento de mouseout (retirar o mouse) à div do menu
menu.addEventListener('mouseout', function(event) {
    // Verifica se o mouse está realmente saindo da div do menu
    if (!event.relatedTarget || !menuButton.contains(event.relatedTarget)) {
        // Oculta o menu se o mouse não estiver sobre o botão
        menu.style.display = 'none';
    }
});

// Obtém uma referência aos links "Home" e "Projetos"
const homeLink = document.querySelector('a[href="index.html"]');
const projetosLink = document.querySelector('a[href="Projetos.html"]');

// Adiciona um ouvinte de evento de mouseover (passar o mouse) aos links "Home" e "Projetos"
homeLink.addEventListener('mouseover', function() {
    // Mantém o menu visível quando o mouse estiver sobre os links
    menu.style.display = 'block';
});

projetosLink.addEventListener('mouseover', function() {
    // Mantém o menu visível quando o mouse estiver sobre os links
    menu.style.display = 'block';
});
