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

////////////////////////////////////////////////////////////////////////////////////////////

function selectedCarouselItem(selectedButtonElement){ // Função que pega o card do carrossel
    const selectedItem = selectedButtonElement.id
    const carousel = document.querySelector('.s-cards-carousel')
    
    const transform = carousel.style.transform 
    // Pegando o valor do style

    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i) 
    // Pesquisa dentro dessa string
    // Expressões regulares (regex) são usadas para encontrar padrões em strings
    
    const rotateYDeg = -120 * (Number(selectedItem) - 1) 
    // Fazendo cálculo e transformando id em number
    
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`) 
    // Substituir os elementos

    carousel.style.transform = newTransform
    //Executando a ação de rotação dos cards

    const activeButtonElement = document.querySelector('.s-controller__button--active')
    activeButtonElement.classList.remove('s-controller__button--active')
    // Remover a classe

    selectedButtonElement.classList.add('s-controller__button--active')
    // Adicionando a classe
}