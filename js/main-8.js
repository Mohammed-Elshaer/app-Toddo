// / <!-- =====================
//         start input show placeholder or hiden when on click
//  ====================== -->
let myinput = document.getElementById('email1');
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

let myinput1 = document.getElementById('password1');
myinput1.onfocus = function (){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput1.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
};

let myinput2 = document.getElementById('username1');
myinput2.onfocus = function (){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput2.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
};

let myinput3 = document.getElementById('confirm1');
myinput3.onfocus = function (){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '')
};
myinput3.onblur = function (){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '')
};


/* <!-- * ------------------------------------------------------
  start option-box
------------------------------------------------------------- --> */

// /* <!-- * ------------------------------------------------------
//   start option-box
// ------------------------------------------------------------- --> */
$(".toggle-setting").click(function(){
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
    email = document.getElementById("email");
    email1 = document.getElementById("email1");
    confirm1 = document.getElementById("confirm1");
    confirm11 = document.getElementById("confirm");
    rtl = document.getElementById('rtl'); 
    ltr = document.getElementById('ltr'); 

    
english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
    //changed rtl
    
};


arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
        //changed rtl or ltr

};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
    
};

function setLanugage(getLanuage){

if(getLanuage === "english"){
    logo.innerHTML = "Todo List";
    submit1.innerHTML = "Se déconnecter";
    tach.innerHTML = "Taches";
    cat.innerHTML = "Categories";
    ins.innerHTML = "inscrire";
    email.innerHTML = "Email";
    email1.placeholder = "type your Email";
    password.innerHTML = "  password  ";
    password1.placeholder = "  type your password  ";
    confirm1.placeholder = "confirm password";
    confirm11.innerHTML = " confirm  ";
    username.innerHTML = " username  ";
    username1.placeholder = "username";
    confirm11.innerHTML = " confirm  ";
    Choisir.innerHTML = " Choisir une catégorie   ";
    regist.innerHTML = " Enregistrer  ";
    submit.innerHTML = " enregistrement  ";
    ltr = document.body.style.direction = "ltr";



}else if(getLanuage ==="arabic"){

    logo.innerHTML = "قائمة أعمال";
    submit1.innerHTML = "  تسجيل الخروج";
    tach.innerHTML = "المهام";
    cat.innerHTML = "فئات";
    ins.innerHTML = "تسجيل";
    email.innerHTML = "الإيميل";
    email1.placeholder = "أكتب إيميلك ";
    password.innerHTML = " كلمة المرور  ";
    password1.placeholder = "أدخل كلمة المرور  ";
    confirm11.innerHTML = " تأكيد  ";
    confirm1.placeholder = "تأكيد كلمة المرور   ";
    username1.placeholder = "اسم المستخدم";
    username.innerHTML = " الإسم  ";
    Choisir.innerHTML = " حدد الفئة  ";
    regist.innerHTML = " تسجيل  ";
    submit.innerHTML = " للتسجيل  ";
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