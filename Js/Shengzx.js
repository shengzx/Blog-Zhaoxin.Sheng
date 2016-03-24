$(document).ready(function () {
    $("#menu-toggler").click(
         function () {
             if ($(this).hasClass("display")) {
                 $("#menu-toggler").removeClass("display");
                 $("#sidebar").removeClass("display");
             } else {
                 $("#menu-toggler").addClass("display");
                 $("#sidebar").addClass("display");
             }
         });
    $("#sidebar li a").click(
                function () {
                    //li状况1 主菜单为内容菜单
                    if ($(this).parent().hasClass("hsub")) {
                        if ($(this).parent().hasClass("open")) {
                            $(this).parent().removeClass("open");
                            $(this).parent().children('ul').slideUp();
                        } else {
                            $("#sidebar li").children('ul').slideUp();
                            $("#sidebar li").removeClass("open");
                            $(this).parent().addClass("open");
                            var s = $(this).parent().children('ul').slideDown();
                        }
                    } else {
                        $("#sidebar li").removeClass("active");
                        $(this).parent().addClass("active");
                        if ($(this).parent().parent().parent().hasClass("hsub")) {
                            $(this).parent().parent().parent().addClass("active");
                        }
                    }

                });
});