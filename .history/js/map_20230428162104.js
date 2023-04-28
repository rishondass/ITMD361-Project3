
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
    strokeColor: "#64008E",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#B400FF",
    fillOpacity: 0.35,
    map,
    center: position,
    radius: 1000,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Jacakalope Coffe & Tea House</h1>' +
    '<div id="bodyContent">' +
    "<p>Casual, colorful spot serving coffee drinks, loose-leaf tea, pastries, wraps & panini.</p>" +
    '<p><a href=''>Website</a>, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Jacakalope Coffe & Tea House",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();
