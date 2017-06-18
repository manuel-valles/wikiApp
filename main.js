$(document).ready(function(){
   $("#searchButton").click(function(){
     var search = $("#search").val();
     // Wiki API - Documentation @ https://en.wikipedia.org/w/api.php     
     var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
     $.ajax({
       type:"GET",
       url: url,
       // Async needed to work
       async:false,
       dataType:"json",
       success: function(data){
         //GET heading-description-link:         
         // console.log(data[1][0]);
         // console.log(data[2][0]);
         // console.log(data[3][0]);
         // This clear is needed. If not it would acumulate all the contents.         
         $("#output").html("");
         for(var i = 0; i<data[1].length; i++){
           $("#output").prepend("<li><a href="+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</li>");
         };
         // Clear input after Submit
         $("#search").val("");
       },
       //function needed even for only an alert.
       error: function(errorMessage){
         console.log("Error");
       }
     });
  });
   $("#search").keypress(function(e){
       if(e.which==13){
          $("#searchButton").click();
       }
   });
});