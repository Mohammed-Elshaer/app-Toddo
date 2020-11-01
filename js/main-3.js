

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
    tach = document.getElementById("tach");
    cat = document.getElementById("cat");
    ins = document.getElementById("ins");
   

let alltsk = document.getElementById('alltsk'); 
let addtsk = document.getElementById('addtsk'); 
let titredetache = document.getElementById('titredetache'); 
let assign = document.getElementById('assign'); 
let datee = document.getElementById('datee'); 
let satuss = document.getElementById('satuss'); 
let opera = document.getElementById('opera')
rtl = document.getElementById('rtl'); 
ltr = document.getElementById('ltr'); 


english.onclick = ()=>{
setLanugage("english");
localStorage.setItem("Lang","english");
//changed rtl
// $('body').removeClass('direction-rtl').addClass('direction-ltr');

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
    alltsk.innerHTML = "All Tâches";
    addtsk.innerHTML = " Ajouter tâche";
    titredetache.innerHTML = "Titre de tache ";
    assign.innerHTML = "Assignée à ";
    datee.innerHTML = "Date ";
    satuss.innerHTML = "Statut ";
    opera.innerHTML = "Opérations ";
    ltr = document.body.style.direction = "ltr";

    

}else if(getLanuage ==="arabic"){

    logo.innerHTML = "قائمة أعمال";
    submit1.innerHTML = "  تسجيل الخروج";
    tach.innerHTML = "المهام";
    cat.innerHTML = "فئات";
    ins.innerHTML = "تسجيل";

    alltsk.innerHTML = "كل المهام  ";
    addtsk.innerHTML = " إضافة مهمة";
    titredetache.innerHTML = "المسمى الوظيفي ";
    assign.innerHTML = "مخصص ل";
    datee.innerHTML = "بتاريخ	 ";
    satuss.innerHTML = "الحالة ";
    opera.innerHTML = "عمليات ";
    rtl = document.body.style.direction = "rtl";


}
};



