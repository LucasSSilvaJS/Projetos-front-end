window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-8.003392519642079, -34.901477142967245),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat, long, icon, content, click){
        var latLng = {'lat': lat, 'lng': long};

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.open(map,marker);
            });
        }else{
            infoWindow.open(map,marker);
        };
    };

    initialize();
    var conteudo = '<p style="color: black; font-size: 13px; padding: 10px 0;">Nosso estabelecimento</p>';
    addMarker(-8.003392519642079, -34.901477142967245, '', conteudo, true);

    /*
    setTimeout(function(){
        map.panTo({'lat':-7.836518954810053, 'lng':-35.75876388923409});
        map.setZoom(8);
    }, 4000);
    */
};
