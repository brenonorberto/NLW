const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-3.7987653,-38.4994594], 15)

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



//create and add marker
L.marker([-3.7987653,-38.4994594], { icon })
.addTo(map)

/* Imagem Gallery */

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da imagem
    imageContainer.src = image.src

    // adicionar a classe active para este botão
    button.classList.add("active")
}
