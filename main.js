//change navber style on scroll

window.addEventListener('scroll' , () =>{
  document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 0)
})

//show and hide faq's asnwer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click' , () => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq-icon i');
    if(icon.className === 'fa-solid fa-plus'){
      icon.className = "fa-solid fa-minus"
    } else{
      icon.className = "fa-solid fa-plus";
    }
  })
})

//show and hide navmenu

const menu = document.querySelector('.nav-menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click' , () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none"
})

//close nav menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closeNav)