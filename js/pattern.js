//another jsplacement tool with html5 canvas

let canvas = document.getElementById('canvas1');
let canvas2 = document.getElementById('canvas2');

var itemList = document.getElementById("canvaSize");
let subPass = document.getElementById("subPass");

function grey(){
  
 
  // select canvas elements
  var destCanvas = document.getElementById("canvas2");
  destCanvas.width=document.getElementById('canvaSize').value;
  destCanvas.height=document.getElementById('canvaSize').value;
  //copy canvas by DataUrl
  var sourceImageData = canvas.toDataURL("image/png");
  var destCanvasContext = destCanvas.getContext('2d');

  var destinationImage = new Image;
  destinationImage.onload = function(){
    destCanvasContext.filter = 'grayscale(1)';
    destCanvasContext.drawImage(destinationImage,0,0);
  };
  destinationImage.src = sourceImageData;
}

subPass.addEventListener(
  "click",
  () => {
 

    var colorc=document.getElementById('colorChoice').value


let degrees=45;

//canvas.width = window.innerWidth>800? window.innerWidth: 800;
//canvas.height = window.innerHeight>800? window.innerHeight: 800;


let ctx = canvas.getContext('2d');
let ctx2 = canvas.getContext('2d');


let imagesLoaded = [];

let randomPattern = function(imgWidth, imgHeight, areaWidth, areaHeight,xsized,colorc) {
  
  canvas.width = document.getElementById('canvaSize').value;
  canvas.height = document.getElementById('canvaSize').value;
  
  let collection = itemList.selectedOptions;
  // either set a defined width/height for our images, or use the first one's
  xsized=document.getElementById('xsize').value
  

  
  imgWidth = imgWidth || imagesLoaded[0].width*xsize;
  imgHeight = imgHeight || imagesLoaded[0].height*xsize;
  // restrict the randmoness size by using an areaWidth/Height
  areaWidth = areaWidth || canvas.width;
  areaHeight = areaHeight || canvas.height;

  // create a buffer canvas
  let patternCanvas = canvas.cloneNode(true);
  let patternCtx = patternCanvas.getContext('2d');

  patternCanvas.width = areaWidth;
  patternCanvas.height = areaHeight;

  //let xloops = Math.ceil(areaWidth / imgWidth);
  //let yloops = Math.ceil(areaHeight / imgHeight);

  let xloops = imgWidth;
  let yloops = imgHeight;
  
  for (let xpos = -50; xpos < xloops; xpos++) {
    for (let ypos = -50; ypos < yloops; ypos++) {
        let xsize=Math.floor(Math.random() * xsized);
        imgWidth = imgWidth || imagesLoaded[0].width*xsize*xsized;
        imgHeight = imgHeight || imagesLoaded[0].height*xsize*xsized;
      let img = imagesLoaded[Math.floor(Math.random() * imagesLoaded.length)];
      
      patternCtx.drawImage(img, (xpos * imgWidth/3), (ypos * imgHeight/3), imgWidth*xsize, imgHeight*xsize);
      
      patternCtx.rotate(degrees*Math.PI/90);
      xsize=Math.floor(Math.random() * 20);
    }
  }
  
  // create a pattern from this randomly created image
  
  return patternCtx.createPattern(patternCanvas, 'repeat');
}  
let loadImages = function(colorc) {
    
  let imagesToLoad =10;
  for (let i = 0; i < imagesToLoad; i++) {
    
    let image = new Image();
    image.onload = function() {
      imagesLoaded.push(this);
      if (imagesLoaded.length === imagesToLoad) {
        draw();
      }
    }
    image.src = colorc + '/00' + i +'.png';
  }
  
};

let draw = function() {
  //create the random pattern (should be moved out of the draw)
  
  
/* globalCompositeOperation :
  normal | multiply | screen | overlay | 
  darken | lighten | color-dodge | color-burn | hard-light | 
  soft-light | difference | exclusion | hue | saturation | 
  color | luminosity
*/
 
let patt = randomPattern(100,100);

for (let i = 0; i < 10; i++) {

  for (let j = 0; j < 10; j++) {
    color=Math.floor(Math.random()*255);
    color2=Math.floor(Math.random()*255);
    ctx.fillStyle = patt;
    ctx.beginPath();
    ctx.fillRect(0, 0, 4098, 4098);

  }
  

}

};
loadImages(colorc);
});





