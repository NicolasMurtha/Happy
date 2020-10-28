const map = L.map('mapid').setView([-21.1295905,-47.8329384], 13);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

//create icon
 const icon = L.icon({
     iconUrl: "/images/map-marker.svg",
     iconSize: [58, 68],
     iconAnchor: [29, 68],
 })

let marker;

 //create and add markers
 map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
 })

 //adicionar o campo de fotos
function addPhotoField(){
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última iamgem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){
    //retirar a class .active
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou não tem
    input.value = button.dataset.value
    //atualizar o meu input hidden com o valor selecionado

}
