
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
}

initMap();
