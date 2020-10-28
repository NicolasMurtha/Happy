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
     popupAnchor: [170, 2]
 })


 function addMarker({id, name, lat, lng}){


    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minwidth: 240,
        minheight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`)


    L
    .marker([-21.1295905,-47.8329384], {icon})
    .addTo(map)
    .bindPopup(popup)

 }

 const orphanagesSpan = document.querySelectorAll('.orphanages')
 orphanagesSpan.forEach(span => {
     const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
     }

     addMarker(orphanage)
 })
