var pw =new pageSwitch('images', {
     
        // duration of animation
        duration: 600,
     
        // 1 = vertical, 0 = horizontal
        direction: 1,
     
        // initial page
        start: 0,
     
        // infinite loop
        loop:false,
     
        // easing function: linear ease ease-in ease-out ease-in-out bounce
        ease:'ease',
     
        // transition effect
        transition:'zoom',
     
        // freeze the page when transitioning
        freeze:false,
     
        // enable mouse drag
        mouse:true,
     
        // enable mouse wheel
        mousewheel:false,
     
        // enable keyboard arrows
        arrowkey:false,
     
        // enable autoplay
        autoplay:true,
     
        // autoplay interval
        interval: 2000
         
    });
    
$.fn.extend({
      pageSwitch:function(cfg) {
        this[0].ps =new pageSwitch(this[0], cfg);
        return this;
      },
      ps:function() {
        return this[0].ps;
      }
    });
     
    // init
    $('#imgs').pageSwitch({
      duration: 1000,
      transition:'zoom'
      // ...
    });
     