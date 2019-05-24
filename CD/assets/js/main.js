var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3, section h4").each(function(){
	//alert("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().replace(/ /g, '-').replace(/\&/g, '') + "'>" + $(this).text() + "</a></li>");	
	
    //$("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    //$(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
	
	$("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().replace(/ /g, '-').replace(/\&/g, '').replace(/\+/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\//g, '') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().replace(/ /g, '-').replace(/\&/g, '').replace(/\+/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\//g, ''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("div ul li").on("click", "a", function(event) {
    //alert($(this).attr("href"));
	if($(this).attr("href").lastIndexOf(".html")>0) 
	{   //alert("bef");
		event.stopPropagation();return;}
	
	//alert($($(this).attr("href")).offset());
    var position = $($(this).attr("href")).offset().top - 130;
	//alert("nav-position"+position);
    $("html, body").animate({scrollTop: position}, 400);
    //$("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });
 
  sectionHeight();

  $('img').on('load', sectionHeight);
  
// mark "?_blank" valid
  var aTagArr = [].slice.apply(document.getElementsByTagName("a"));

  aTagArr.forEach(function (e, i) {
  e.href.indexOf("_blank") > -1 ? e.target = "_blank" : null;
});
// https://blog.csdn.net/gao497278979/article/details/52089399 
});
