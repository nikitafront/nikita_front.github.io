$(document).ready((function(){let s=$(".burger");s.on("click",(function(){$(this).toggleClass("active"),$("body").toggleClass("lock"),$(this).hasClass("active")?($(".links_list_burger").css("height","300px"),$(".links_list_burger").css("display","flex")):($(".links_list_burger").css("height","0px"),$(".links_list_burger").css("display","none"))})),$(window).resize((function(){s.removeClass("active"),$(".links_list_burger").css("display","none"),$("body").removeClass("lock")})),$(window).scroll((function(){$(window).scrollTop()>300?$(".main_section1").css("margin","-30px 0 0 0"):$(".main_section1").css("margin","0 0 0 0")})),$(".anchor").on("click",(function(t){s.removeClass("active"),$("body").removeClass("lock"),$(".links_list_burger").css("height","0px"),$(".links_list_burger").css("display","none"),$("html,body").stop().animate({scrollTop:$("#result").offset().top},900)})),$(window).scroll((function(){$(window).scrollTop()>=600?($(".anchor_up").css("bottom","30px"),$(".anchor_up").on("click",(function(s){$("html,body").stop().animate({scrollTop:$("#up").offset().top},900)}))):$(".anchor_up").css("bottom","-100px")})),$("img.scroll_image").each((function(){var s=$(this),t=s.attr("class"),o=s.attr("src");$.get(o,(function(o){var i=$(o).find("svg");void 0!==t&&(i=i.attr("class",t+" replaced-svg")),!(i=i.removeAttr("xmlns:a")).attr("viewBox")&&i.attr("height")&&i.attr("width")&&i.attr("viewBox","0 0 "+i.attr("height")+" "+i.attr("width")),s.replaceWith(i)}),"xml")}))}));