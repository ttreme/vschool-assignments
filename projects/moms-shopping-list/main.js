$(".mainList").css({
    "text-align": "center"
    , "padding-top": 100
    , "background-color": "yellow"
});
$(".listBox").css({
    "text-align": "center"
    , "padding-top": 10
    , "background-color": "red"
})


$(".submitButton").click(function () {
    var newTodo = $(".listAddition").val();
    $("ol").append($("<li class=" + "deleteList>" + newTodo + "<button class=" + "deleteMeButton> "+ "X" + "</button>" + "</li>"));
});
$(document).on("click", ".deleteMeButton", function() {
    $(this).parent('li').remove();
});