function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 20,
    center: { lat: 41.837758, lng: -87.622315},
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml",
    map: map,
  });

 
}

window.initMap = initMap;