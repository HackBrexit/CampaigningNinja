var geoJsonObject;

$(document).ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function(){
      if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
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

    //constituency list
    $("#add-btn").click(function(){
      var span = $("<span>").addClass("glyphicon glyphicon-remove").css({"color":"#f1948a","font-size":"16px"});
      var button = $("<button>").addClass("btn btn-danger bt-sm").css("float","right").append(span);
      var list = $("<li>").addClass("list-group-item").text($("#const-search").val()).append(button);
      $("#const-list").append(list);
    });

    $("#const-list").on("click",".btn",function() {
      $(this).closest('.list-group-item').remove();
    });

    $("contain-list").on("click","#save-consts",function(){

    });

    //table data
    var constituencies = [];
    $("#const-list").each(function(index,value){
      if(value!=null){
        constituencies.push(value);
      }
    });
    $("#post-code-data")


  //map
    var mapOptions = {
      zoom: 5,
      center: new google.maps.LatLng(55.3781 ,-3.4360)
    }

    map=new google.maps.Map($('#map')[0], mapOptions);

    $.getJSON("./data/wpc.json", function(uk){
      geoJsonObject = topojson.feature(uk,uk.objects.wpc);
      map.data.addGeoJson(geoJsonObject);
    });

    $.getJSON("./data/niwpc.json",function(ni){
      geoJsonObject = topojson.feature(ni,ni.objects.wpc);
      map.data.addGeoJson(geoJsonObject);
    });
});
