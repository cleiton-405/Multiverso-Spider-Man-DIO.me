function handleMouseEnter(){ // Função que adiciona uma classe
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(){ // Função para remover uma classe
    this.classList.remove('s-card--hovered')
    document.body.id = ``
}

function addEventListenersToCard(){ 
    // Evento chamado quando o usuário passar o mouse em algum dos cards

    const cardElements = document.getElementsByClassName("s-card")

    for (let i = 0; i < cardElements.length; i++){ // Looping
        const card = cardElements[i];

        card.addEventListener("mouseenter", handleMouseEnter) // Adicionando o evento
        card.addEventListener("mouseleave", handleMouseLeave) // Adicionando o evento
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false) 
// Executando esse elemento