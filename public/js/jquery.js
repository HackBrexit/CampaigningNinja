var geoJsonObject;

$(document).ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
      if(location.pathname.replace(/^\//,'') ==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name='+this.hash.slice(1)+']');
        if(target.length){
          $('html,body').animate({
            scrollTop:target.offset().top
          },800);
          return false;
        }
      }
    });


    var mapOptions = {
      zoom: 5,
      center: new google.maps.LatLng(55.3781 ,-3.4360)
    }


    map=new google.maps.Map($('#map')[0], mapOptions);

    $.getJSON("./data/wpc.json", function(uk){
      console.log(uk)
      geoJsonObject = topojson.feature(uk,uk.objects.wpc);
      map.data.addGeoJson(geoJsonObject);

    });

});
