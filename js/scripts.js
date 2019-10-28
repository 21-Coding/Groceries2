$(document).ready(function(){
  $(".groceries").submit(function(event){
    event.preventDefault();
    var items = ['item1', 'item2', 'item3', 'item4']
    var newItems = items.map(function(item){

      return $("input#" + item).val();



      console.log(item.toUpperCase());

    });
    newItems.sort();
    newItems.forEach(function(item) {
      $(".result").append("<li>"+ item.toUpperCase() +"</li>");

    })
    });
  });
