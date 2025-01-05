//popup/.
document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
});
//popup withdraw/.
document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popups")[0].classList.add("active");
});

//copy
let copy = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copy");
}