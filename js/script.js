/**
 * Created by Juan on 07/03/16.
 */
function initialize() {
    var mapProp = {
        center:new google.maps.LatLng(51.055648,4.458960),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

