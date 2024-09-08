function opensidebar(){
    document.querySelector(".sidebardiv").style.display='flex';
}
function closesidebar(){
    document.querySelector(".sidebardiv").style.display='none';
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})