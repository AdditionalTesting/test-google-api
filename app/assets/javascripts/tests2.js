window.alert('test');
document.addEventListener("DOMContentLoaded", function() {


   var response = $.ajax({
     url: 'https://maps.googleapis.com/maps/api/geocode/json?address',
     method: 'GET',
     data: {
       origin: "Toronto,ON",
       destination: "Montreal,QC",
       travelMode: DRIVING,
        transitOptions: TransitOptions,
        drivingOptions: DrivingOptions,
        unitSystem: UnitSystem,
        // waypoints[]: DirectionsWaypoint,
        optimizeWaypoints: Boolean,
        provideRouteAlternatives: Boolean,
        avoidHighways: Boolean,
        avoidTolls: Boolean,
        region: String
}
    //  dataType: ''
   })

console.log(response);
});
