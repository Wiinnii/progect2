$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1300,
    //adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
    responsive: [
      {
        breakpoint: 998,
        settings: {
          speed: 200,
          arrows: false,
          dots: true,
        }
      }]
  });
  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#lid, #order').fadeOut();
      $('#gratitude , #modal').fadeIn();

      $('form').trigger('reset');
    });
    return false;
  });
});

let catalogTabs = document.getElementById('catalog__tabs');
let catalogT = document.getElementsByClassName('catalog__tabs');

function activ() {
  let fitnes = document.getElementsByClassName('fitnes')[0];
  let triathlon = document.getElementsByClassName('triathlon')[0];
  let run = document.getElementsByClassName('run')[0];
  let a = catalogTabs.getElementsByTagName("li");
  for (let b = 0; b < a.length; b++) {
    a[b].addEventListener('click', clickTabs, true);
    function clickTabs(EO) {
      EO = EO || window.event;
      EO.preventDefault();
      for (let b = 0; b < a.length; b++) {
        a[b].className = '';
        if (this == a[0]) {
          run.style.display = 'none';
          triathlon.style.display = 'none';
          fitnes.style.display = 'flex';
        }
        if (this == a[1]) {
          run.style.display = 'flex';
          triathlon.style.display = 'none';
          fitnes.style.display = 'none';
        }
        if (this == a[2]) {
          run.style.display = 'none';
          triathlon.style.display = 'flex';
          fitnes.style.display = 'none';
        }
      }
      this.className = 'activ';
    }
  }
}
activ();

let catalogListAll = document.getElementById('catalog__list-all')

catalogListAll.addEventListener('click', clickCatalogLink, true);
function clickCatalogLink(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  let catalogList = document.getElementsByClassName('catalog__list');
  for (let index = 0; index < catalogList.length; index++) {
    let div = catalogList[index];
    let linksFront = div.getElementsByClassName('catalog-product__link');
    let linksBack = div.getElementsByClassName('catalog-product__back-descr__link');
    for (let a = 0; a < linksFront.length; a++) {
      if (EO.target == linksFront[a]) {
        let parentF = linksFront[a].parentNode;
        parentF.style.display = 'none';
        let parent = parentF.parentNode;
        let parentB = parent.getElementsByClassName('catalog-product__back-descr')[0];
        parentB.style.display = 'block';
      }
    }
    for (let a = 0; a < linksBack.length; a++) {
      if (EO.target == linksBack[a]) {
        let parentB = linksBack[a].parentNode;
        parentB.style.display = 'none';
        let parent = parentB.parentNode;
        let parentF = parent.getElementsByClassName('catalog-product__front')[0];
        parentF.style.display = 'block';
      }
    }
  }
}


//modal window
//переменные
let promo = document.getElementsByClassName('promo')[0];
let promoButtom = promo.getElementsByTagName('button');
let lid = document.getElementById('lid');
let order = document.getElementById('order');
let gratitude = document.getElementById('gratitude');
let = document.getElementById('modal');
let modalClose = document.getElementsByClassName('modal__close');
let catalog = document.getElementsByClassName('catalog')[0];
let buttonCatalog = catalog.getElementsByTagName('button');
// пробую правильно сделать 

promo.addEventListener('click', clickPromo, true);
function clickPromo(EO) {
  EO = EO || window.event;
  for (let index = 0; index < promoButtom.length; index++) {
    let element = promoButtom[index];
    if (element == EO.target) {
      modal.style.display = 'block';
      lid.style.display = 'block';

    }
  }
};



//закрытие модальных окон

modal.addEventListener('click', clickModalClose, true)
function clickModalClose(EO) {
  EO = EO || window.event;
  for (let index = 0; index < modalClose.length; index++) {
    if (EO.target == modalClose[index]) {
      modal.style.display = 'none';
      lid.style.display = 'none';
      order.style.display = 'none';
      gratitude.style.display = 'none';
    }

  }

};


catalog.addEventListener('click', clickBottonCatalog, true);
function clickBottonCatalog(EO) {
  EO = EO || window.event;
  for (let index = 0; index < buttonCatalog.length; index++) {
    if (EO.target == buttonCatalog[index]) {
      let elem = ((EO.target).parentNode).parentNode;
      let titleText = (elem.getElementsByClassName('catalog-product__title')[0]).childNodes[0];
      let subtitle = order.getElementsByClassName('modal__subtitle')[0];
      subtitle.textContent = `${titleText.data}`;
      modal.style.display = 'block';
      order.style.display = 'block';

    }
  }
};





