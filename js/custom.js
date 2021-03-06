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

        $(".slick-active .text").removeClass("animated fadeInBlur").addClass("animated fadeInBlur");
        $(".slick-active .text .title").removeClass("animated fadeInUp").addClass("animated fadeInUp");
        $(".slick-active .text .p").removeClass("animated fadeInDown").addClass("animated fadeInDown");

        //購物車刪除
        function confirmDelet(e) {
            var r = confirm("確定要刪除?");
            if (r == true) {
                $(e).fadeOut();
            } else { }
        }
        $('.delet').click(function(e){
            let num = $(this).attr('data-target');
            confirmDelet(num);
        })
        //回到頂端按鈕

        $(function(){
            // 點下按鈕之後，會以animate動態效果讓捲軸捲到網頁最頂端
            $("#btn_goTop").click(function(){
                jQuery("html,body").animate({
                    scrollTop:0
                },500);
            });

            // 目前的位置距離網頁頂端，大於200px就顯示按鈕，小於就隱藏
            $(window).scroll(function() {
                if ( $(this).scrollTop() > 200){
                    $('#btn_goTop').fadeIn("fast");
                } else {
                    $('#btn_goTop').stop().fadeOut("fast");
                }
            });
        });

    });
})(this.jQuery);