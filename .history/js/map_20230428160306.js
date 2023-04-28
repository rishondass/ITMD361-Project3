
let map;

async function initMap() {
  //41.83626463626482, -87.64583370293322
  const position = { lat: 41.83626463626482, lng: -87.64583370293322 };


  
  const { Map } = await google.maps.importLibrary("maps");
  const { Marker } = await google.maps.importLibrary("marker");

  
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "1",
  });

  // The marker, positioned at Uluru
  const marker = new Marker({
    map: map,
    position: position,
    title: "Jacakalope Coffe & Tea House",
  });

  const circle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    center: citymap[city].center,
    radius: Math.sqrt(citymap[city].population) * 100,
  });
}

initMap();