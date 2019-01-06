$(function layout() {
var imgLoad;
var $tumblelog = $('#horizontal');
var content = document.querySelector("article");
imgLoad = imagesLoaded("#horizontal");
imgLoad.on('always', function(){
    content.style.opacity = "1";    //appears the content block once initial images are loaded
});
imgLoad.on('progress', function(instance, image){
    console.log("001");
});
$(window).load(function(){      //Waits a sec before running infinite scroll
    console.log("002");
    $tumblelog.infinitescroll({ //Initialises the infinite scroll
    navSelector: ".pagination",
    nextSelector: ".pagination .previous-page a",
    itemSelector: "article",
    bufferPx: 2400, //Since photosets can get quite long, and this is a 3 column theme, the buffer is extra long to stop people from having to scroll up too much
    prefill:true,
    },
    function(newElements){
        console.log("003");
        var $newElems = $(newElements).css({opacity:0});
        $newElems.imagesLoaded(function(){
            $newElems.animate({opacity:1});
        });
        console.log("loaded");
    });
});

$(document).ready(function scroll() {

    scrollConverter.activate(function (offset) {
console.log("scrolling"); // Logs the current horizontal scroll
});

});

});

$(document).ready(function text(){

    var more = document.querySelector("read-more");

    $('.indexpage article.type_text p').text(function(_, txt) {
      if(txt.length > 120){
        txt = txt.substr(0, 120);
      }
      $(this).html(txt)
    });
});

$(function toggle(){
  var toggle = document.querySelector(".toggle-btn"),
  header = document.querySelector(".header"),
  overlay = document.querySelector(".overlay"),
  body = document.querySelector("body");

  toggle.onmouseenter = function() {
      header.classList.add("active");
      body.classList.add("header-open");
      overlay.classList.add("show");
  }

  toggle.onclick = function() {
      header.classList.toggle("active");
      body.classList.toggle("header-open");
      overlay.classList.toggle("show");
      console.log("toggle onclick");
  }
})
