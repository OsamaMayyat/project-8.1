var home1 = document.getElementById("home");
var list1 = document.getElementById("list1");
var cart1 = document.getElementById("cart");
var right1 = document.getElementById("right");
var home2 = document.getElementById("home2");
var item1 = document.getElementById("item");
var flav1 = document.querySelectorAll(".flav");
function list () {
    list1.style.left = "0";
}
function cart () {
    cart1.style.left = "0";
}
function home () {
    cart1.style.left = "100%";
    list1.style.left = "100%";
}
function right () {
    right1.style.left = "0";
    home2.style.display = "none";
}
function logo () {
    right1.style.left = "100%";
    home2.style.display = "block";
}
function item () {
    item1.style.display = "none";
}
flav1.forEach(btn1 => {
    btn1.addEventListener('click', function (){
        flav1.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
