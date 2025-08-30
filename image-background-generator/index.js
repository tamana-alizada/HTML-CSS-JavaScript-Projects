var ImgBox = document.querySelector('.img-box');
var ImgWrap = document.querySelector('.img-wrap');

var leftSpace = ImgBox.offsetLeft; // left space of the imgbox from its parent which is now the div with the class of container

var originalImg = document.getElementById('original-img');
var line = document.getElementById('line');
originalImg.style.width = ImgBox.offsetWidth + "px";


ImgBox.onmousemove = function (e) {
  var boxWidth = (e.pageX - leftSpace) + "px"
  ImgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
}