const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
$(document).ready(function(){
    $(".plreview").click(function(event){
        $(".plreview, .reviews_best, .videos").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".review").click(function(event){
        $(".review, .reviews_best, .videos").toggleClass("disactive");
    });
 });
 $(document).ready(function(){
    $(".owners").click(function(event){
        $(".owners, .owners_all, .main_actors").toggleClass("active");
    });
 });
 $(document).ready(function(){
    $(".player_actor").click(function(event){
        $(".player_actor, .main_actors, .owners_all").toggleClass("disactive");
    });
 });