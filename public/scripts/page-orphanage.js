const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([51.505, -0.09], 13);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

//create icon
 const icon = L.icon({
     iconUrl: "./public/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68],
     popupAnchor: [170, 2]
 })

L
.marker([51.5, -0.09], {icon})
.addTo(map)

// image gallery//

function selectImage(event){
    const button = event.currentTarget
    console.log(event.currentTarget)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para o botão clicado
    button.classList.add('active')
}
