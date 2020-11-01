
// <!-- =====================
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



      

/* <!-- * ------------------------------------------------------
  start option-box
------------------------------------------------------------- --> */
$(".toggle-setting").click(function(){
    $(".lang-option").fadeToggle();
});

/* <!-- * ------------------------------------------------------
  end option-box
------------------------------------------------------------- --> */

/* <!-- * ------------------------------------------------------
 start choise langage and changed rtl or ltr
------------------------------------------------------------- --> */

let arabic = document.getElementById("arabic");
    english = document.getElementById("english");
    title = document.getElementById("logo");
    login = document.getElementById("login");
    email = document.getElementById("email");
    email1 = document.getElementById("email1");
    password = document.getElementById("password");
    password1 = document.getElementById("password1");
    submit1 = document.getElementById("submit1");
    submit = document.getElementById("submit");
    rtl = document.getElementById('rtl'); 
    ltr = document.getElementById('ltr'); 
    
    english.onclick = ()=>{
        setLanugage("english");
        localStorage.setItem("Lang","english");
    };
    
    arabic.onclick = ()=>{
        setLanugage("arabic");
        localStorage.setItem("Lang","arabic");
    };
    
    onload = ()=>{
        setLanugage(localStorage.getItem("Lang"));
        
    };
    
    function setLanugage(getLanuage){

if(getLanuage === "arabic"){
    logo.innerHTML = "قائمة أعمال";
    login.innerHTML = "دخول";
    email.innerHTML = "الإيميل";
    email1.placeholder = "أكتب إيميلك ";
    password.innerHTML = "كلمة المرور ";
    submit1.innerHTML = " مستخدم جديد";
    submit.innerHTML = " الدخول";
    password1.placeholder = "أدخل كلمة المرور";
    rtl = document.body.style.direction = "rtl";

}else if(getLanuage ==="english"){
    logo.innerHTML = "Todo List";
    login.innerHTML = "Login";
    email.innerHTML = "Email";
    email1.placeholder = "type your Email";
    password.innerHTML = "password";
    password1.placeholder = "type your Password";
    submit1.innerHTML = "identifier";
    submit.innerHTML = "identifier";
    ltr = document.body.style.direction = "ltr";
}
};

/* <!-- * ------------------------------------------------------
 end choise langage
------------------------------------------------------------- --> */
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