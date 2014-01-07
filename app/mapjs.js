/*

MapJs was developed by Raphael Amorim

GitHub Project -> http://github.com/raphamorim/mapjs

*/

//A principio foi optado uma arquitetura simples, que é dissolvida em 3 camadas:
//Map = trata das respostas dos devidos sources e responde a View
//Helper = camada que serve para aglomerar simples funções, dando uma enxutada no código
//View = responsável por setar os dados ou mapa na tela, ela precisa do Helper e Map alinhados
//PS: __startApp é o "main" do APP será rodado apenas quando a tela for carregada.

var map = new Map();
var helper = new Helper();
var view = new View();


//Objeto default, pode ser alterado pelo próprio desenvolvedor
var mapProperties = {
		  element: "mapjs",
      sizeW: "500px",
      sizeH: "200px",
      latitude: null,
      longitude: null,
      zoom: 15
    };

window.onload = __startApp;

function __startApp () {

  var qnt = helper.getQuantum(mapProperties.element);

  for (i = 0; i <= qnt; i++) {

	   var height = helper.getAtt("height");
	   var width = helper.getAtt("width");
	   var latitude = helper.getAtt("latitude");
	   var longitude = helper.getAtt("longitude");
	   var zoom = parseInt(helper.getAtt("zoom"));
     var type = helper.getAtt("type"); // por enquanto
	   var src = helper.getAtt("src"); // por enquanto
	   var set = helper.getAtt("set");


	   switch (set) {

		    case "actual": map.getMap(width, height, zoom);
			    break;
		    case "latitude": map.getLatitude();
			    break;
		    case "longitude": map.getLongitude();
			    break;
        case "map": map.setMap(latitude, longitude, width, height, zoom);

		    default: map.getMap(width, height, zoom);
			    break;
	   }

  }
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

    this.getAtt = function(value) {
      return document.querySelector(mapProperties.element).getAttribute(value);
    }

    this.getQuantum = function(element) {
      return document.getElementsByTagName(element).length;
    }

    this.html = function(element, value) {
      document.querySelector(element).innerHTML = value;
    }

}

function View() {

  this.returnError = function(msg) {

      src = view.getScreen();

      if(src) {
        helper.html(mapProperties.element, "<img src='" + src + "' />");
        return false;
      }

      console.log('Error: Ocorred a problem with MapJs');

      if(msg) {
        console.log(msg);
      }

  }

  this.getScreen = function(){
      var src = "http://maps.googleapis.com/maps/api/staticmap?zoom=" + mapProperties.zoom + "&size=600x300&maptype=roadmap&markers=color:red%7Ccolor:red%7Clabel:C%7C" + mapProperties.latitude + "," + mapProperties.longitude + "&sensor=false";
      return src;
  }

}


//Draw Maps Function
function draw(position){
    var s = document.querySelector('#status');

    if (s.className == 'success') {
        return;
    }

    s.innerHTML = null;

    s.className = 'success';

    var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height =  mapProperties.sizeH;
        mapcanvas.style.width =  mapProperties.sizeW;

    document.querySelector('article').appendChild(mapcanvas);

    if((mapProperties.latitude == null)&&(mapProperties.longitude == null)) {
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    }else{
      var latlng = new google.maps.LatLng(mapProperties.latitude, mapProperties.longitude);
    }

    var myOptions = {
        zoom: mapProperties.zoom,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"You are here!"
    });
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
      this.getMap = function(mapWidth, mapHeight, zoom) {

          if(mapWidth)
              mapProperties.sizeW = mapWidth;

          if(mapHeight)
              mapProperties.sizeH = mapHeight;

          if(zoom)
              mapProperties.zoom = zoom;

          helper.html(mapProperties.element, "<section><article><p><span id='status'>Please wait...</span></p></article></section></div>");

          navigator.geolocation.getCurrentPosition(draw, view.returnError);

      }


      this.getLatitude = function() {
          navigator.geolocation.getCurrentPosition(setLatitude, view.returnError);
      }


      this.getLongitude = function() {
          navigator.geolocation.getCurrentPosition(setLongitude, view.returnError);
      }


      //CREATE MAP USING PARAMETERS
      this.setMap = function(lat, lon, mapWidth, mapHeight, zoom) {

          if(mapWidth)
              mapProperties.sizeW = mapWidth;

          if(mapHeight)
              mapProperties.sizeH = mapHeight;

          if(zoom)
              mapProperties.zoom = zoom;


          mapProperties.latitude = lat;
          mapProperties.longitude = lon;

          helper.html(mapProperties.element, "<section><article><p><span id='status'>Please wait...</span></p></article></section></div>");

          navigator.geolocation.getCurrentPosition(draw, view.returnError);

      }

}