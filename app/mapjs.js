/*

MapJs was developed by Raphael Amorim

GitHub Project -> http://github.com/raphamorim/mapjs

*/

var map = new Map(),
    helper = new Helper(),
    view = new View(),
    pointer = null;

//Default object, you can change if wanna...
var mapProperties = {
		  tag: "mapjs",
      list: [],
      sizeW: "500px",
      sizeH: "200px",
      latitude: null,
      longitude: null,
      zoom: 15,
      typeId: null
    };

window.onload = __getElements;
var __creating = window.setInterval(__getElements, 1000);


function __getElements () {

  var indice = helper.getQuantum(mapProperties.tag);
  var elemento = document.querySelectorAll(mapProperties.tag);

  console.log(indice);

  for(i = 0; i < indice; i++) {
      elemento[i].setAttribute("id", "map" + i);
      mapProperties.list.push("map" + i);
  }

  clearInterval(__creating);

  __creating = window.setInterval(__startApp, 10);

}


function __startApp () {
    var list = mapProperties.list;


    for (i = 0; i < list.length; i++) {

      if (pointer != null) {

      } else {

          el = '#' + list[i];

          var height = helper.getAtt(el ,"height");
          var width = helper.getAtt(el, "width");
          var latitude = helper.getAtt(el ,"latitude");
          var longitude = helper.getAtt(el ,"longitude");
          var zoom = parseInt(helper.getAtt(el ,"zoom"));
          var type = helper.getAtt(el ,"type");
          var set = helper.getAtt(el, "set");

          mapProperties.typeId = type;

          switch (set) {

              case "here": map.getMap(el, width, height, zoom);
                  break;
              case "latitude": map.getLatitude();
                  break;
              case "longitude": map.getLongitude();
                  break;
              case "map": map.setMap(el, latitude, longitude, width, height, zoom);
                  break;

              default: map.getMap(width, height, zoom);
                  break;
          }

          if ( pointer != null )
            list.splice(i, 1);

      }

          console.log(list);
    }

    console.log(pointer);

    if (pointer === null)
      clearInterval(__creating);
}

//Code to get Maps from Google
window.google = window.google || {};
  google.maps = google.maps || {};
  (function() {

    function getScript(src) {
      document.write('<' + 'script src="' + src + '"' +
                     ' type="text/javascript"><' + '/script>');
    }

    var modules = google.maps.modules = {};
    google.maps.__gjsload__ = function(name, text) {
      modules[name] = text;
    };

    google.maps.Load = function(apiLoad) {
      delete google.maps.Load;
      apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"m@231000000"],[["http://khm0.googleapis.com/kh?v=137\u0026hl=pt-BR\u0026","http://khm1.googleapis.com/kh?v=137\u0026hl=pt-BR\u0026"],null,null,null,1,"137"],[["http://mt0.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"h@231000000"],[["http://mt0.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"t@131,r@231000000"],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=81\u0026hl=pt-BR\u0026","http://khm1.googleapis.com/kh?v=81\u0026hl=pt-BR\u0026"],null,null,null,null,"81"],[["http://mt0.googleapis.com/mapslt?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt/ft?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/vt?hl=pt-BR\u0026","http://mt1.googleapis.com/vt?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt/loom?hl=pt-BR\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=pt-BR\u0026","https://mts1.googleapis.com/mapslt?hl=pt-BR\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=pt-BR\u0026","https://mts1.googleapis.com/mapslt/ft?hl=pt-BR\u0026"]]],["pt-BR","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/pt_br/mapfiles/api-3/14/3","3.14.3"],[2853384449],1,null,null,null,null,1,"",null,null,0,"http://khm.googleapis.com/mz?v=137\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"h",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"h",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",131],[0,"r",131000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],0],[null,[[4,"t",131],[0,"r",131000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],3],[null,null,[null,"pt-BR","US",null,18],0],[null,null,[null,"pt-BR","US",null,18],3],[null,null,[null,"pt-BR","US",null,18],6],[null,null,[null,"pt-BR","US",null,18],0]]], loadScriptTime);
    };
    var loadScriptTime = (new Date).getTime();
    getScript("http://maps.gstatic.com/intl/pt_br/mapfiles/api-3/14/3/main.js");

})();


function Helper() {

    this.getAtt = function(selector, value) {
      return document.querySelector(selector).getAttribute(value);
    }

    this.getQuantum = function(element) {
      return document.getElementsByTagName(element).length;
    }

    this.html = function(element, value) {
      document.querySelector(element).innerHTML = value;
    }

    this.getSize = function(value) {
      return value.replace("px", "");
    }

}

function View() {

  this.returnError = function(msg) {

      src = view.getScreen();

      if (src) {
        helper.html(mapProperties.element, "<img src='" + src + "' />");
        return false;
      }

      console.log('Error: Ocorred a problem with MapJs');

      if (msg) {
        console.log(msg);
      }

  }

  this.getScreen = function(){
      var src = "http://maps.googleapis.com/maps/api/staticmap?z=" + mapProperties.zoom + "&size=" + helper.getSize(mapProperties.sizeW) + "x" + helper.getSize(mapProperties.sizeH) + "&t=m&markers=color:red%7Ccolor:red%7Clabel:C%7C" + mapProperties.latitude + "," + mapProperties.longitude + "&sensor=false";
      return src;
  }

}


//Draw Maps Function
function draw(position){

    var s = document.querySelector('#' + pointer);

    console.log(pointer);

    if (s.className == 'success') {
        return;
    }

    s.innerHTML = null;

    s.className = 'success';

    var itemName = 'mapcanvas' + pointer;

    var mapcanvas = document.createElement('div');
        mapcanvas.id = itemName;
        mapcanvas.style.height =  mapProperties.sizeH;
        mapcanvas.style.width =  mapProperties.sizeW;

    document.querySelector('article').appendChild(mapcanvas);

    if ((mapProperties.latitude == null)&&(mapProperties.longitude == null)) {
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    } else {
      var latlng = new google.maps.LatLng(mapProperties.latitude, mapProperties.longitude);
    }

    var myOptions = {
        zoom: mapProperties.zoom,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
    };

    switch (mapProperties.typeId) {
        case "roadmap": myOptions.mapTypeId = google.maps.MapTypeId.ROADMAP
          break;
        case "satellite": myOptions.mapTypeId = google.maps.MapTypeId.SATELLITE
          break;
        case "hybrid": myOptions.mapTypeId = google.maps.MapTypeId.HYBRID
          break;
        case "terrain": myOptions.mapTypeId = google.maps.MapTypeId.TERRAIN
          break;
        default: myOptions.mapTypeId = google.maps.MapTypeId.ROADMAP
          break;
        }

    var map = new google.maps.Map(document.getElementById(itemName), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"You are here!"
    });

    mapProperties.latitude = null;
    mapProperties.longitude = null;
    mapProperties.zoom = 15;
    pointer = null;

}

//Set Latitude and Longitude in a Element
function setLatitude(position){
      var latlng = position.coords.latitude;
      helper.html(mapProperties.element, String(latlng));
}

function setLongitude(position){
      var latlng = position.coords.longitude;
      helper.html(mapProperties.element, String(latlng));
}


//The Map Class
function Map(){

      //GET MAP
      this.getMap = function(element, mapWidth, mapHeight, zoom) {

          if (mapWidth)
              mapProperties.sizeW = mapWidth;

          if (mapHeight)
              mapProperties.sizeH = mapHeight;

          if (zoom)
              mapProperties.zoom = zoom;


          helper.html(element, '<section><article><span id="' + element.replace("#", "S") +
                      '">Please wait...</span></article></section></div>');


          if (pointer != null)
              return false;

          pointer = element.replace("#", "S");

          navigator.geolocation.getCurrentPosition(draw, view.returnError);

      }


      this.getLatitude = function() {
          navigator.geolocation.getCurrentPosition(setLatitude, view.returnError);
      }


      this.getLongitude = function() {
          navigator.geolocation.getCurrentPosition(setLongitude, view.returnError);
      }


      //CREATE MAP USING PARAMETERS
      this.setMap = function(element, lat, lon, mapWidth, mapHeight, zoom) {

          if(mapWidth)
              mapProperties.sizeW = mapWidth;

          if(mapHeight)
              mapProperties.sizeH = mapHeight;

          if(zoom)
              mapProperties.zoom = zoom;

          mapProperties.latitude = lat;
          mapProperties.longitude = lon;


          helper.html(element, '<section><article><span id="' + element.replace("#", "S") +
                      '">Please wait...</span></article></section></div>');

          if (pointer != null)
              return false;

          pointer = element.replace("#", "S");

          navigator.geolocation.getCurrentPosition(draw, view.returnError);

      }

}