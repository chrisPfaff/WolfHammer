!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/.dist/",t(t.s=0)}([function(n,t,e){n.exports=e(1)},function(n,t,e){"use strict";!function(n){n&&n.__esModule}(e(2));e(3)},function(n,t){function e(){var n=0,t="opening",e="open";this.classList.toggle("active");this.classList.contains("active");Array.from(o).filter(function(o){if(o.classList.contains("active")){var c=[e,t];t=c[0],e=c[1],console.log(t),n+=1,r.innerHTML="Score: ".concat(n)}})}console.log("The Wolf is coming!");var o=document.querySelectorAll(".rule"),r=document.querySelector(".score");o.forEach(function(n){return n.addEventListener("click",e)})},function(n,t){}]);