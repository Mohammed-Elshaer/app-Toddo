

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
allcateg = document.getElementById('allcateg');
let Titredecategorie = document.getElementById('Titredecategorie');
let numberofemployees = document.getElementById('numberofemployees');
let Opérations = document.getElementById('Opérations');
let addcateg = document.getElementById('addcateg');

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
        tach.innerHTML = "Taches";
        cat.innerHTML = "Categories";
        ins.innerHTML = "inscrire";
        Titredecategorie.innerHTML = "Titre de categorie ";
        numberofemployees.innerHTML = "number of employees  ";
        Opérations.innerHTML = "Opérations ";
        allcateg.innerHTML = " All Categories  ";
        addcateg.innerHTML = " Ajouter categorie  ";
        ltr = document.body.style.direction = "ltr";

    } else if (getLanuage === "arabic") {

        logo.innerHTML = "قائمة أعمال";
        submit1.innerHTML = "  تسجيل الخروج";
        tach.innerHTML = "المهام";
        cat.innerHTML = "فئات";
        ins.innerHTML = "تسجيل";
        Titredecategorie.innerHTML = "عنوان الفئة";
        numberofemployees.innerHTML = "عدد الموظفين  ";
        Opérations.innerHTML = "عمليات ";
        allcateg.innerHTML = " جميع الفئـــات ";
        addcateg.innerHTML = "اضــــافه فئــه ";
        rtl = document.body.style.direction = "rtl";

    }
};
// /* <!-- * ------------------------------------------------------
//  end choise langage
// ------------------------------------------------------------- --> */




