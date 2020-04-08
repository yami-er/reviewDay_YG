$("input[id=fname]").keyup(function(event){
    if(event.keyCode == 13){
        var toAdd = $('input[id=fname]').val();
      alert(toAdd);
    }         
});



