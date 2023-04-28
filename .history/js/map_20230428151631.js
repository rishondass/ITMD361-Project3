let map;

async function initMap(){
  const position = {lat: -25.344, lng: 131.031};

  const {Map} = await google.maps.importLibrary("maps");
  const {AdvancedMarkerView} = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    map
  })



}