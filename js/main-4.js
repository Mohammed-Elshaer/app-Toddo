
let myinput = document.getElementById('plcho');
myinput.onfocus = function () {
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
// /* <!-- * ------------------------------------------------------
//   start option-box
// ------------------------------------------------------------- --> */
$(".toggle-setting").click(function () {
    $(".lang-option").fadeToggle();
});

// /* <!-- * ------------------------------------------------------
//   end option-box
// ------------------------------------------------------------- --> */

// /* <!-- * ------------------------------------------------------
//  start choise langage and changed rtl or ltr
// ------------------------------------------------------------- --> */

let arabic = document.getElementById("arabic");
english = document.getElementById("english");
submit1 = document.getElementById("submit1");
tach = document.getElementById("tach");
titre = document.getElementById('titre');
plcho = document.getElementById('plcho');
ajouter = document.getElementById('ajouter');
rtl = document.getElementById('rtl');
ltr = document.getElementById('ltr');

english.onclick = () => {
    setLanugage("english");
    localStorage.setItem("Lang", "english");
};

arabic.onclick = () => {
    setLanugage("arabic");
    localStorage.setItem("Lang", "arabic");

};

onload = () => {
    setLanugage(localStorage.getItem("Lang"));

};

function setLanugage(getLanuage) {

    if (getLanuage === "english") {

        logo.innerHTML = "Todo List";
        submit1.innerHTML = "Se déconnecter";
        ajouter.innerHTML = " ajouter une nouvelle category  ";
        tach.innerHTML = "Taches";
        cat.innerHTML = "Categories";
        ins.innerHTML = "inscrire";
        titre.innerHTML = "  Titre ";
        CréerCat.innerHTML = " Créer Category ";
        plcho.placeholder = "  Ajouter le titre de category ";
        ltr = document.body.style.direction = "ltr";

    } else if (getLanuage === "arabic") {

        logo.innerHTML = "قائمة أعمال";
        submit1.innerHTML = "  تسجيل الخروج";
        tach.innerHTML = "المهام";
        cat.innerHTML = "فئات";
        ins.innerHTML = "تسجيل";
        ajouter.innerHTML = " اضــــافه فئــه جــديده ";
        titre.innerHTML = "عنــوان  ";
        CréerCat.innerHTML = "إنشـــاء فئــه ";
        plcho.placeholder = "أضــف عنـــوان الفئــــة  ";
        rtl = document.body.style.direction = "rtl";

    }
};
// /* <!-- * ------------------------------------------------------
//  end choise langage
// ------------------------------------------------------------- --> */




var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }