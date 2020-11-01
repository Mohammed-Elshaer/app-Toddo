let myinput = document.getElementById('plcho');
myinput.onfocus = function (){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
};

let myinput1 = document.getElementById('date');
myinput1.onfocus = function () {
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput1.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
};

let myinput2 = document.getElementById('description');
myinput2.onfocus = function () {
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput2.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
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
desctsk = document.getElementById('desctsk');
description = document.getElementById('description');
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

    if (getLanuage === "arabic") {

        logo.innerHTML = "قائمة أعمال";
        submit1.innerHTML = "  تسجيل الخروج";
        submit.innerHTML = "  إنشاء مهمة ";
        tach.innerHTML = "المهام";
        cat.innerHTML = "فئات";
        ins.innerHTML = "تسجيل";
        desctsk.innerHTML = "  أوصف الفئة  ";
        titre.innerHTML = "عنــوان  ";
        imgtsk.innerHTML = "الصورة  ";
        plcho.placeholder = "أضــف عنـــوان الفئــــة  ";
        description.placeholder = "  أوصف الفئة ";
        image.innerHTML = "  أختر ملف ";
        dattsk.innerHTML = " التــاريـخ";
        asstsk.innerHTML = " قـم بتعيين المهمــة إلــى";
        newtsk.innerHTML = " تعديل مهمة ";
        rtl = document.body.style.direction = "rtl";


    } else if (getLanuage === "english") {

        logo.innerHTML = "Todo List";
        submit1.innerHTML = "Se déconnecter";
        desctsk.innerHTML = "  Description  ";
        tach.innerHTML = "Taches";
        cat.innerHTML = "Categories";
        ins.innerHTML = "inscrire";
        titre.innerHTML = "  Titre ";
        imgtsk.innerHTML = " imgtsk ";
        plcho.placeholder = "  Ajouter le titre de category ";
        description.placeholder = "  Ajouter le titre de category ";
        image.innerHTML = "choose file";
        dattsk.innerHTML = "Date de la tache ";
        asstsk.innerHTML = " Attribuez la tâche à";
        submit.innerHTML = "  Créer Tache  ";
        newtsk.innerHTML = " Ajustement des tâches";

        ltr = document.body.style.direction = "ltr";

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