(function(){

  //Split the div's para's etc text into character spans
  $(".bro-split-into-chars").each(function(i, el){
    var $this = $(this),
      text = $this.text();

    $this.text("");

    for (var i = 0; i < text.length; i++) {
      $this.append($("<span>" + text[i] + "</span>").addClass("bro-char"));
    }

  }); 
})();