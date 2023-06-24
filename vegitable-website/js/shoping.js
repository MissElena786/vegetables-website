"use strict"

console.log("maa")


$("#searchBar").hide()
$(".search").on("click",function(){
    $("#searchBar").toggle();

})

$(".loginForm").hide()
$(".bi-person-fill").on("click",function(){
    $(".loginForm").toggle()
})

$(".basket").hide();
$(".bi-cart4").on("click",function(){
    $(".basket").toggle();
})

$(".bi-list").on("click",function(){
      $(".list").show(); 
      $(".bi-x-square-fill").css("display","block")
      $(".bi-list").css("display", "none")
      $(".icons").css('display', 'block')

    //   $("header").css("color","white")        
    //   $("header").css("background-color","orange")        
    // $(".heading").css("hight",'2rem')
    
    // $(".cart-product1").css("margin-top","6rem")      

    $(".header").addClass("head")
    $(".bi-cart4 bi-person-fill").css('text-align','start')
});
$(".bi-x-square-fill").on("click", function(){
    $(".bi-list").css("display", "block")
    $(".list").hide()
    $(".header").removeClass("head")
    $(".bi-x-square-fill").css("display","none")
    $(".icons").css('display', 'none')



})



