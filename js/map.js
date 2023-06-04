
function initMap() {
    let locations = JSON.parse(data);
    let center = JSON.parse(mapCenter);
    let CustomOp = {
        center:
            new google.maps.LatLng(center.lat, center.lng),
        zoom: 6,
    };

    let map = new google.maps.Map(document.getElementById("map"), CustomOp);
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">%nazwa%</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Długość sieci: </b>%dlugosc_sieci% <br /> " +
        "<p><b>Ilość punktów adresowych: </b>%ilosc_punktow% <br /> " +
        "<p><b>Termin ukończenia: </b>%termin_ukonczenia% <br /> " +
        "</div>";

  $.each(locations, function(index, lokalizacja) {
      index++;
      let content = contentString;
      content = content.replace('%nazwa%', lokalizacja.name);
      content = content.replace('%dlugosc_sieci%', lokalizacja.dlugosc_sieci);
      content = content.replace('%ilosc_punktow%', lokalizacja.ilosc_punktow);
      content = content.replace('%termin_ukonczenia%', lokalizacja.termin_ukonczenia);
      let infowindow = new google.maps.InfoWindow({
          content: content,
          ariaLabel: "Uluru",
      });

      var marker = new google.maps.Marker({
          position:
              new google.maps.LatLng(lokalizacja.lat, lokalizacja.lng),
          map: map,
      });
      marker.addListener('click', function() { infowindow.open(map, this)});
  });
}


