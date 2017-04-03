//Back-End Logic:
function Task(item, description) {
  this.listEntry = item;
  this.listDescription = description;
}


Task.prototype.fullEntry = function() {
  return this.listEntry + " " + this.listDescription;
}





$(document).ready(function() {
  $("form#new-item").submit(function(event) {
    event.preventDefault();
    var inputtedListItem = $("input#new-list-item").val();
    var inputtedDescription = $("input#new-item-description").val();

    var newItem = new Task(inputtedListItem, inputtedDescription);

    $("input#new-list-item").val("");
    $("input#new-item-description").val("");

    $("#re-entry").append('<li class="choreItem"><input type="checkbox" name="this-checkbox" value="">' + newItem.fullEntry()+'</li>');

    $("#re-entry").on("click", "li", function(){
      $(this).wrap("<strike>");
      $(this).addClass("menuitemchecked");



    });
  });

  $("form#remove-form").submit(function(event) {
    event.preventDefault();
    alert("This event just triggered.");
    $("input:checkbox[name=this-checkbox]:checked").each(function() {
    // $(this).parent().remove(); // this works 100% by itself.
    // $("strike").remove(); // this also is a stand alone %100.
    // var completed = document.getElementByID("mySelect")
    // completed.remove(completed.selectedIndex);
    $(".menuitemchecked").remove();
    });
  });
});
