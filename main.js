const divContainerMap = document.querySelector("#map");

const authorization = confirm("Souhaitez-vous être géolocalisé ?");

if(authorization) {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // creation de la carte et ajout des coordonnées
        let map = L.map("map").setView([latitude, longitude], 13);
        // couche de tuiles  openstreetmap
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // marqueur
        let marker = L.marker([latitude, longitude]).addTo(map);
        // circle
        let circle = L.circle([latitude, longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
        // popup
        marker.bindPopup("<b>Salut le monde!</b><br>Ici c'est ma position actuelle.").openPopup();
    })
    
}
