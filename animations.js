$(document).ready(function() {
	$("#tweet-controls").hide();
    $(".tweet-actions").hide();
    $(".stats").hide();
    $(".reply").hide();
    $('.container img').tooltip(); 
    
     $('.tweet-compose').on('click', function() {
		 $(this).css('height', '5em');
		 $("#tweet-controls").show();
       })
    
     $('.tweet-compose').keyup(function(){
          var max = 140;
          var len = $(this).val().length;
          var char = max - len;
        if (char >= 10) {
            $('#char-count').html(char);
            $('#char-count').css('color', '#999');
            $("#tweet-controls").show();
           } 
        if (char < 10) {
          $('#char-count').html(char);
          $('#char-count').css('color', 'red');
          $("#tweet-controls").show();
           }
         if(char < 0){
         	$("#tweet-controls").hide();
         }  
        });

    $('.button').on('click', function(){
    	 var _clone = $('.tweet:first');
         var _target = $('#stream');
    	 var newTweet = _clone.clone(true);
    	 var value = $('.tweet-compose' ).val();
    	 newTweet.find('.tweet-text').html(value);
    	 newTweet.find('.fullname').html("Chase Zollinger");
    	 newTweet.find('.username').html("chasezol");
    	 newTweet.find('img:first').attr("src", "10458037_10153576845098368_5377146531518877991_n.jpg");
         newTweet.prependTo("#stream");
       });

    $('.content').hover(function() {
    $(this).find('.tweet-actions').show();
  }, function() {
    $(this).find('.tweet-actions').css("display", "none");
    });

     $('.content').on('click', function(){
         $(this).find(".stats").show();
         $(this).find(".reply").show();
       });
     $('.content').on('dblclick', function(){
         $(this).find(".stats").hide();
         $(this).find(".reply").hide();
       });

});