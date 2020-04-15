(function ($) {
    $(document).ready(function () {
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 57
        });

        // Collapse Navbar
        var navbarCollapse = function() {
            if ($("#mainNav").offset().top > 80) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

        //喜歡
        $('.shop .con .con-pic .like').click(function(){
            $(this).toggleClass('click');
        })

        /*漢堡選單*/
        $('.menu-btn').click(function () {
            $('.menu-btn').toggleClass('open');
            $('body').toggleClass('height100');
        });
        $('.site-overlay').click(function () {
            $('.menu-btn').removeClass('open');
            $('body').removeClass('height100');
        });
        //修正ios的mobile menu
        $('.site-overlay,.pushy').on('touchmove', function (e) {
            e.preventDefault();
        });

        /*main_btn 主選單*/
        $(".main_btn").click(function(){
            var subMenu = $(this).find(".sub_menu").hasClass("sub_menu");
            if(subMenu == true){
                $(this).find(".sub_menu").toggleClass("none");
            }else{
                $(this).addClass("active").siblings().removeClass("active");
            }
        })

        /*checkbox*/
        $(".checkboxAll").click(function(){
            console.log($(this).hasClass("checked"))
            if($(this).hasClass("checked")){
                $(this).removeClass("checked");
                $(".checkbox").removeClass("checked");
            }else{
                $(this).addClass("checked");
                $(".checkbox").addClass("checked");
            }
        });
        $(".checkbox").click(function(){
            $(this).toggleClass("checked");

        });

    });

})(this.jQuery);