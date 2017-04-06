var todos = [];
var todosTwo;
$.get("http://api.vschool.io/titus/todo/", function (response) {
    todos = response;
    for (var i = 0; i < todos.length; i++) {
        $(".todos").append(`<p data-item-id = ${todos[i]._id}>${todos[i].title}<button class="delete">X </button></p> `);
    }
    deleteEvent();
})
$(".boxMe").css("background-color", "yellow").css("font-size", 25).css("text-align", "center");
$("#pushMyData").on("click", function () {
        var newPost = {
            title: $("#titleMe").val()
            , description: $("#myDescription").val()
            , price: $("#myPrice").val()
            , imgUrl: $("#myUrl").val()
            , completed: false
        }
        $.post("http://api.vschool.io/titus/todo/", newPost, function () {
            newPost;
        });
        todos.push(newPost);
    console.log(todos);
    })
    //delete
function deleteEvent() {
    $(".delete").click(function () {
        var _id = $(this).parent().attr("data-item-id");
        var deleteObject = {
            type: "DELETE"
            , url: "http://api.vschool.io/titus/todo/" + _id
            , success: function (response) {
                console.log(response.msg);
            }
        };
        $.ajax(deleteObject);
        $(this).parent().remove();
    })
}
//get add their ids
//access them by _id
//delete from html
//put (update)