let sideFilterBtn= document.getElementById('side-filter-btn');
let sideFilter= document.getElementById('side-menu-filter');
let wishListBtn= document.querySelectorAll('.wishlist-btn');
let alertItem= document.querySelector('#wishlist-alert');
let alertTxt= document.querySelector('#wishlist-alert-txt');

console.log(wishListBtn);


sideFilterBtn.addEventListener('click', ()=>{sideFilter.classList.toggle('hide'); console.log('show')})


wishListBtn.forEach(wishBtn=>{
  wishBtn.addEventListener('click', ()=>{
    alertItem.classList.remove("hide");
    alertTxt.innerText='This item is added to your wishlist';
    setTimeout(()=>{
      alertItem.classList.add("hide");
    }, 1000);
  });
});
