jQuery(document).ready(function($) {
  
  $('.lightbox_trigger').click(function(e) {
    
    //prevent default action (hyperlink)
    e.preventDefault();
    
    //Get clicked link href
    var image_href = $(this).attr("href");
    
    /*  
    If the lightbox window HTML already exists in document, 
    change the img src to to match the href of whatever link was clicked
    
    If the lightbox window HTML doesn't exists, create it and insert it.
    (This will only happen the first time around)
    */
    
    if ($('#lightbox').length > 0) { // #lightbox exists
      
      //place href as img src value
      $('#content').html('<img src="' + image_href + '" />');
        
      //show lightbox window - you could use .show('fast') for a transition
      $('#lightbox').show();
    }
    
    else { //#lightbox does not exist - create and insert (runs 1st time only)
      
      //create HTML markup for lightbox window
      var lightbox =
      '<div id="lightbox">' +
        '<ul class="lightbox-list">' +
          '<li><a class="lightbox-logo lada" href="#"></a></li>' +
          '<li><a class="lightbox-logo niva" href="#"></a></li>' +
          '<li><a class="lightbox-logo renault" href="#"></a></li>' +
          '<li><a class="lightbox-logo uaz" href="#"></a></li>' +
        '</ul>' +
      '</div>';
        
      //insert lightbox HTML into page
      $('body').append(lightbox);
    }
    
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $(document).on('click', "#lightbox", function() { //must use live, as the lightbox element is inserted into the DOM
    $('#lightbox').hide();
  });

  $("#jRate").jRate({
    startColor: '#c21f1f',
    endColor: '#c21f1f',
    shape: 'CIRCLE',
    backgroundColor: '#d4d4d4',
    shapeGap: '10px',
    strokeWidth: '0px',
    precision: 0.5,
    onChange: function(rating) {
      $('#demo-onchange-value').text(rating);
    }
  });

});