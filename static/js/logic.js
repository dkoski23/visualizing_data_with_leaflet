console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data',
    maxZoom: 18,
    accessToken:API_KEY
})

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data',
    maxZoom: 18,
    accessToken:API_KEY
})

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data',
    maxZoom: 18,
    accessToken:API_KEY
})


let map = L.map('mapid',{
    center: [40.7, -94.5],
    zoom: 3,
    layers: [streets]
})

let baseMap = {
    "Streets": streets,
    "Satellite": satelliteStreets,
    Light: light
}

let allEarthquakes = new L.LayerGroup()
let largeEarthquakes = new L.LayerGroup()
let tectonicplates = new L.LayerGroup()
