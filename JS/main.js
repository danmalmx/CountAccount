  function initMap() {
    const loc = {lat: 57.708870, lng: 11.974560};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
      zoom: 14,
      center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map});
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#nav').style.opacity = 0.9;
    } else {
      document.querySelector('"nav').style.opacity = 1;
    }
  });

$('#nav a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
