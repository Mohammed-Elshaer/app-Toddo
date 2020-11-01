



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
        // ajouter.innerHTML = " ajouter une nouvelle category  ";
        tach.innerHTML = "Taches";
        cat.innerHTML = "Categories";
        ins.innerHTML = "inscrire";
        welc.innerHTML = "Welcome ";
        categ.innerHTML = "Your category is ";
        categ1.innerHTML = "You have ";
        categ2.innerHTML = "tasks ";

        title.innerHTML = "Title";
        date.innerHTML = 'Date';
        complete.innerHTML = 'Complete';
        title1.innerHTML = "Title";
        date1.innerHTML = 'Date';
        complete1.innerHTML = 'Complete';
        ltr = document.body.style.direction = "ltr";

    } else if (getLanuage === "arabic") {

        logo.innerHTML = "قائمة أعمال";
        submit1.innerHTML = "  تسجيل الخروج";
        tach.innerHTML = "المهام";
        cat.innerHTML = "فئات";
        ins.innerHTML = "تسجيل";
        welc.innerHTML = "مرحبـــا ";
        categ.innerHTML = "فئتك هي ";
        categ1.innerHTML = " لديك ";
        categ2.innerHTML = " مهام ";

        title.innerHTML = "العنوان";
        date.innerHTML = 'التاريخ';
        complete.innerHTML = 'الانتهاء';
        title1.innerHTML = "العنوان";
        date1.innerHTML = 'التاريخ';
        complete1.innerHTML = 'الانتهاء';
        rtl = document.body.style.direction = "rtl";

    }
};
// /* <!-- * ------------------------------------------------------
//  end choise langage
// ------------------------------------------------------------- --> */


