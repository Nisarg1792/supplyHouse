$(document).ready(function(){


    //hide all banner images except for the first one
    $("#display-wrapper>div:gt(0)").hide();

    //set interval for images and append the show img to the front
    var imgInterval=setInterval(function(){
        $(".bannerImg:first")
            .fadeOut(500)
            .next()
            .fadeIn(500)
            .end()
            .appendTo('#display-wrapper')
    }, 4000);

    //set interval for controller circles
    var count = 1;
    var radioInterval = setInterval(function(){
        $(".bannerR:nth-child("+count+")").removeClass('active');
        var next = count<3 ? count+1:1;
        $(".bannerR:nth-child("+next+")").addClass('active');
        count = next;
    },4000);

    //if a controller circle is clicked, clear all Interval, then use 3 circles to control display
    $(".bannerR").click(function(){
        clearInterval(imgInterval);
        clearInterval(radioInterval);
        var num = $(this).attr('value');
        $("#displayGroup>div.active").removeClass("active");
        $(this).addClass("active");
        $(".banner"+num).css('display','block').appendTo("#display-wrapper");
    });



    //hover a heating show first sub menu
    $(".nav-bar>ul>li").hover(function(){
        $(this).find(".overlay").css("display","block");
    },function(){
        $(this).find(".overlay").css("display","none");
    });

    //hover first sub menu show second sub menu
    $(".overlay-body>ul>li").hover(function(){
        $(this).find(".overlay-sub").css("display","block");
    },function(){
        $(this).find(".overlay-sub").css("display","none");
    })

});
