let sideFilterBtn= document.getElementById('side-filter-btn');
let sideFilter= document.getElementById('side-menu-filter');
let whishListBtn= document.querySelector('.wishlist-btn');
let alertItem= document.querySelector('#wishlist-alert');

sideFilterBtn.addEventListener('click', ()=>{sideFilter.classList.toggle('hide'); console.log('show')})


whishListBtn.addEventListener('click', ()=>{
  console.log(alertItem);
  setTimeout(()=>{
    alertItem.classList.remove("hide");
    alertItem.innerHtml=`<div class="alert primary-col primary-light-bg" >
    <p>This item is added to your wishlist</p>
    </div>`
    // alertItem.classList.remove("hide");
  }, 1000);
  alertItem.classList.add("hide");
});
