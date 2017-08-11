$(document).ready(function () {
    setTimeout(function(){
        $('.splash').addClass('loaded');
    }, 2000);
    
    /*var mediaquery = window.matchMedia("(min-width: 1024)");
    if(mediaquery.matches){
        $(window).scroll(function(){
            var headerHeight = $('header').height();
            if($(this).scrollTop()>headerHeight){
                $('.menu').css({position: 'fixed', top: 0});
            }else{
                $('.menu').css({position: 'static'});
            }
        });
    }*/
    



    $(".header-info__burger").on('click', function () {
        $(this).toggleClass("open");
        $(".menu").toggleClass("show");
    })


    //Categorías:
    let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tab-bar__item'));
    let panels = Array.prototype.slice.apply(document.querySelectorAll('.category'));
    document.querySelector('.tab-bar').addEventListener('click', e => {
        if (e.target.classList.contains('tab-bar__item')) {
            let i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');
            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');
        }
    });
    console.log(tabs);
    console.log(panels);
});