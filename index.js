

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

   // L.marker([location, longitude]).addTo(myMap);
marker.setLatLng([latitude, longitude])
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude
}
getISS();
const  myMap = L.map('map').setView([51.505, -0.45], 1);

const issIcon = L.icon({
    iconUrl: 'iss2.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});


const marker = L.marker([0,0], { icon: issIcon}).addTo(myMap)
const attribution = 
'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(myMap)