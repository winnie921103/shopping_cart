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

        function testAnim(shake) {
            $('.cart, .phone-cart').removeClass('shake').addClass('shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('shake');
            });
        };

        $(document).ready(function(){
            $('.shop .con button').click(function(e){
                e.preventDefault();
                var anim = $('.shake');
                testAnim(anim);
            });


        });
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
    });

})(this.jQuery);