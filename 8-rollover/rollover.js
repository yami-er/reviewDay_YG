
    /* $( "li" ).hover(
      function() {
        $( this ).append( $( "<span> over </span>" ) );
      }, function() {
        $( this ).find( "span" ).last().remove();
      }
    ); */


    $( "li" )
    .mouseenter(function() {
      $(this ).first().text( "over" );
    });

    $("li")
    .mouseleave(function() {
        $(this ).first().text( "out" );
    })
     
    
 