// header-animation-page-reload

window.addEventListener("load",function(){
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});