function myFunction(x) {
  if (x.matches) {  $(function(){
        var stickyHeaderTop = $('#stickytypeheader').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('#stickytypeheader').css({position: 'fixed', top: '0px', padding: '0px 20px',filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0.1rem 0.1rem 1rem)' ,transition: 'all .4s'  });
                        $('#sticky').css('display', 'block');
                } else {
                        $('#stickytypeheader').css({position: 'static', top: '0px', padding: '0px' , filter: 'none' });
                        $('#sticky').css('display', 'none');
                }
        });
  });   } 
  
  else {
   document.body.style.backgroundColor = "";
  }
}

var x = window.matchMedia("(max-width: 980px)")
myFunction(x)
x.addListener(myFunction)