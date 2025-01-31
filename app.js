// document.querySelector("#btnShow").addEventListener("click" , function(){
//     document.querySelector(".popup").classList.add("active");
// })



document.querySelector("#btnShow").addEventListener("click", function(event) {  
    event.preventDefault(); // Prevent default action if the button is a link  
    document.querySelector(".popup").classList.add("active");  
});

document.querySelector(".popup .btnClose").addEventListener("click" , function(){
    document.querySelector(".popup").classList.remove("active");
})