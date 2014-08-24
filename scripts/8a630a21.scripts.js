"use strict";angular.module("silviaApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/pictures",{templateUrl:"views/pictures.html",controller:"PicturesCtrl"}).when("/links",{templateUrl:"views/links.html",controller:"LinksCtrl"}).when("/ssp",{templateUrl:"views/ssp.html",controller:"SspCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("silviaApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("silviaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("silviaApp").controller("PortfolioCtrl",["$scope",function(a){function b(){var a=angular.element("spelresultat");a.innerHTML="Vinst",h+=1}function c(){var a=angular.element("spelresultat");a.innerHTML="Förlust",i+=1}function d(){var a=angular.element("spelresultat");a.innerHTML="lika"}function e(a,e){return a===e?void d():void("Sten"===a?"Sax"===e?b():"Påse"===e&&c():"Sax"===a?"Sten"===e?c():"Påse"===e&&b():"Påse"===a&&("Sten"===e?b():"Sax"===e&&c()))}function f(a){var b=Math.floor(3*Math.random()),c=g[b],d=angular.element("datornsVal");d.innerHTML=c,e(a,c);var f=angular.element("anvandarens_poang");f.innerHTML=h;var j=angular.element("datorns_poang");j.innerHTML=i;var k=angular.element("slutresultat");3===h?(k.innerHTML="Grattis! Du vann över datorn med "+(h-i)+"poäng",angular.element("Sten").disabled=!0,angular.element("Sax").disabled=!0,angular.element("Påse").disabled=!0):3===i&&(k.innerHTML="Tyvärr du förlorade! Datorn slog dig med "+(i-h)+"poäng",angular.element("Sten").disabled=!0,angular.element("Sax").disabled=!0,angular.element("Påse").disabled=!0)}a.test="hejsan";var g=["Sten","Sax","Påse"],h=0,i=0,j=angular.element("Sten");j.onclick=function(){var a=angular.element("Anvandarens_val");a.innerHTML="Sten",f("Sten")};var k=angular.element("Sax");k.onclick=function(){var a=angular.element("Anvandarens_val");a.innerHTML="Sax",f("Sax")};var l=angular.element("Påse");l.onclick=function(){var a=angular.element("Anvandarens_val");a.innerHTML="Påse",f("Påse")};var m=angular.element("borja_om");m.onclick=function(){h=0,i=0,angular.element("anvandarens_poang").innerHTML=h,angular.element("datorns_poang").innerHTML=i,angular.element("slutresultat").innerHTML="",angular.element("Sten").disabled=!1,angular.element("Sax").disabled=!1,angular.element("Påse").disabled=!1,angular.element("Anvandarens_val").innerHTML="",angular.element("datornsVal").innerHTML="",angular.element("spelresultat").innerHTML=""}}]),angular.module("silviaApp").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("silviaApp").controller("PicturesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("silviaApp").controller("LinksCtrl",["$scope",function(a){a.links=[{image:"images/moves.jpg",name:"Moves",url:"http://www.moves.se"},{image:"images/krav.jpg",name:"Krav",url:"http://www.krav.se"},{image:"images/chicy.jpg",name:"Chicy",url:"http://www.chicy.se"}]}]),angular.module("silviaApp").controller("SspCtrl",["$scope",function(a){var b=["Sten","Sax","Påse"];a.anvandarensPoang=0,a.datornsPoang=0,a.anvandarensVal=null,a.datornsVal=null,a.spelresultat=0,a.sten=function(){a.anvandarensVal=b[0],a.datornsVal=b[Math.floor(3*Math.random())],f(a.anvandarensVal,a.datornsVal)};var c=function(){a.spelresultat="lika"},d=function(){a.anvandarensPoang+=1,a.spelresultat="anvandarenVinner"},e=function(){a.datornsPoang+=1,a.spelresultat="datornVinner"},f=function(a,b){return a===b?void c():void("Sten"===a?"Sax"===b?d():"Påse"===b&&e():"Sax"===a?"Sten"===b?e():"Påse"===b&&d():"Påse"===a&&("Sten"===b?d():"Sax"===b&&e()))}}]);