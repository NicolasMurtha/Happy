const map = L.map('mapid').setView([51.505, -0.09], 13);

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

 //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minwidth: 240,
        minheight: 240
    }).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>')


L
.marker([51.5, -0.09], {icon})
.addTo(map)
.bindPopup(popup)
