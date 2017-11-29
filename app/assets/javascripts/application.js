// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function (){

			var myCords = new google.maps.LatLng(33.784634, -84.421496);

    function initialize() {
      var mapOptions = {
      center: myCords,
      zoom: 18,
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);    

      var marker = new google.maps.Marker({
      	position: myCords,
      	map: map,
      	title: 'StronBox West'

      })
    }
      
    google.maps.event.addDomListener(window, 'load', initialize);
});