$(document).ready(function(){
  $(".groceries").submit(function(event){
    event.preventDefault();
    var items = ['item1', 'item2', 'item3', 'item4']
    items = items.map(function(item){

      var userInput = $("input#" + item).val();


      $(".result").append("<li>"+ userInput.toUpperCase() +"</li>")
      console.log(item.toUpperCase());

    });
    });
  });
