// Set slideShowSpeed (milliseconds)
var slideShowSpeed = 3000;
// Duration of crossfade (seconds)
var crossFadeDuration = 3;
// Specify the image files
var Pic = new Array(); // dont touch this
// to add more images, just continue
// the pattern, adding to the array below
Pic[0] = 'imgs/slide/img1.png';
Pic[1] = 'imgs/slide/img1.png';
Pic[2] = 'imgs/slide/img2.png';
Pic[3] = 'imgs/slide/img3.png';

var t;
var oddCheck;
var j = 0;
var p = Pic.length;

var preLoad = new Array()
	for (i = 0; i < p; i++) {
		preLoad[i] = new Image();
		preLoad[i].src = Pic[i];
	}
 
function runSlideShow() {
	if (document.all){
	document.images.SlideShow.style.filter ="blendTrans(duration = 2)";
	document.images.SlideShow.style.filter ="blendTrans(duration = crossFadeDuration)";
	document.images.SlideShow.filters.blendTrans.Apply(); 
	}
 
	document.images.SlideShow.src = preLoad[j].src;
 
	if (document.all) {
		document.images.SlideShow.filters.blendTrans.Play();
	}
 
	j = Math.floor(Math.random()*(p));
	
	t = setTimeout('runSlideShow()',slideShowSpeed);
} 