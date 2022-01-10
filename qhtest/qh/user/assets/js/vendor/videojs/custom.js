
(function() {
  var hidden = "hidden";

  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;

  function onchange (evt) {
      
    var indid;  
    $('video').each(function () 
    {
         $(this).get(0).pause();
        indid=this.id;
        //document.getElementById(indid).pause();
    });  
      
    var cusid_ele = document.getElementsByClassName('video-js');
    for (var i = 0; i < cusid_ele.length; ++i) 
    {
        //var item = cusid_ele[i];  
        var item=(cusid_ele[i].id).toString();
         document.getElementById(item).pause();
    }  
  }

  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();


var $allVideos = $('video');

$('video').on('play', function(e) {
  $allVideos.not(this).each(function() {
    this.pause()
  })
});
    
    


    
    
    
