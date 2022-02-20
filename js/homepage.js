
  let imgPath="/media/home/";
  let slider1Fwd= document.getElementById('slid-t-btn-fwd');
  let slider2Fwd= document.getElementById('slid-m-btn-fwd');
  let slider3Fwd= document.getElementById('slid-b-btn-fwd');
  let slider1Rev= document.getElementById('slid-t-btn-rev');
  let slider2Rev= document.getElementById('slid-m-btn-rev');
  let slider3Rev= document.getElementById('slid-b-btn-rev');

let currentPg= 1;
let lastPage=3;

slider1Fwd.addEventListener('mouseover', ()=>{
  let slider1ImgLeft= document.getElementById('slid-t-img-left');
  let slider1ImgRight= document.getElementById('slid-t-img-right');
  currentPg=(currentPg==lastPage)? 1: currentPg+1;
  slider1ImgLeft.src= imgPath +`left-top-${currentPg}.webp`;
  slider1ImgRight.src= imgPath +`right-top-${currentPg}.webp`;

});


slider1Rev.addEventListener('mouseover', ()=>{
  let slider1ImgLeft= document.getElementById('slid-t-img-left');
  let slider1ImgRight= document.getElementById('slid-t-img-right');
  currentPg=(currentPg==1)? lastPage: currentPg-1;
  console.log(currentPg, lastPage);
  slider1ImgLeft.src= imgPath +`left-top-${currentPg}.webp`;
  slider1ImgRight.src= imgPath +`right-top-${currentPg}.webp`;
});


slider2Fwd.addEventListener('mouseover', ()=>{
  let slider2Img= document.getElementById('slid-m-img');
  currentPg=(currentPg==lastPage)? 1: currentPg+1;
  slider2Img.src= imgPath +`center-${currentPg}.webp`;

});

slider2Rev.addEventListener('mouseover', ()=>{
  let slider2Img= document.getElementById('slid-m-img');
  currentPg=(currentPg==1)? lastPage: currentPg-1;
  slider2Img.src= imgPath +`center-${currentPg}.webp`;
});

slider3Fwd.addEventListener('mouseover', ()=>{
  let slider3ImgLeft= document.getElementById('slid-b-img-left');
  let slider3ImgRight= document.getElementById('slid-b-img-right');
  currentPg=(currentPg==lastPage)? 1: currentPg+1;
  slider3ImgLeft.src= imgPath +`left-bottom-${currentPg}.webp`;
  slider3ImgRight.src= imgPath +`right-bottom-${currentPg}.webp`;
});
slider3Rev.addEventListener('mouseover', ()=>{
  let slider3ImgLeft= document.getElementById('slid-b-img-left');
  let slider3ImgRight= document.getElementById('slid-b-img-right');
  currentPg=(currentPg==1)? lastPage: currentPg-1;
  slider3ImgLeft.src= imgPath +`left-bottom-${currentPg}.webp`;
  slider3ImgRight.src= imgPath +`right-bottom-${currentPg}.webp`;
});
