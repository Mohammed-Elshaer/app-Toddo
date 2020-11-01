

/* <!-- * ------------------------------------------------------
  start option-box
------------------------------------------------------------- --> */
$(".toggle-setting").click(function () {
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
submit1 = document.getElementById("submit1");
submit = document.getElementById("submit");
regst = document.getElementById("regst");

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

        submit1.innerHTML = "identifier";
        submit.innerHTML = "Commencer";
        regst.innerHTML = "Organisez tout avec";
        ltr = document.body.style.direction = "ltr";

    } else if (getLanuage === "arabic") {

        logo.innerHTML = "قائمة أعمال";
        submit1.innerHTML = " مستخدم جديد";
        submit.innerHTML = " ابدأ";
        regst.innerHTML = " نظم وقتك";
        rtl = document.body.style.direction = "rtl";

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