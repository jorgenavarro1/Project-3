function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.837486, -87.622701);
  var mapOptions = {
    center: myLocation,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    mapTypeControlOptions: {
    position: google.maps.ControlPosition.TOP_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'media/iitlogo.png'
  });

  var contentString = '<h1>IIT Gunsaulus Hall</h1>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(myMap, marker);
    });


}

google.maps.event.addDomListener(window, 'load', init);