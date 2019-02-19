  function initMap() {
    const loc = {lat: 57.708870, lng: 11.974560};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
      zoom: 14,
      center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map});
  }