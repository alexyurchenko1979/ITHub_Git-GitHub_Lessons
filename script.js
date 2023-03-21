const moveTo = new MoveTo();

const button = document.querySelectorAll("button");

button.forEach(btn => moveTo.registerTrigger(btn));

tippy('[data-tippy-content]', {
    theme: 'light',
    animation: 'scale',
    arrow: true

});

function myFunc(){
    micron.getEle("#me").interaction("groove").duration("2").timing("ease-out");
 }

//Call Interaction
myFunc();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 800,
    spaceBetween: 10,

    //loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  let element = document.getElementById('phone');
  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  let mask = IMask(element, maskOptions);