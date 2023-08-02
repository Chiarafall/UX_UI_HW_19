console.log ("index.js file is loaded correctly!");

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

// Arrow bouncing on hover (not working):
function bounce(){
  $(".center-arrow").bounce("slow");
  setTimeout(isFinite);
  
}

// revealing the card as scrolling ("Coming Soon" not working): from:https://scrollrevealjs.org/
ScrollReveal().reveal('#rogen')
ScrollReveal().reveal('#cbc', { delay: 500 })
ScrollReveal().reveal('#healink', { delay: 800})
ScrollReveal().reveal('#ComingSoon', { delay: 1000})

ScrollReveal({ reset: true });

