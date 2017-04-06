var num = 0;
if(localStorage.getItem("click")) {
    num = localStorage.getItem("click");
    $(document).on("click", function () {
        num++;
        $("#printsHere").html(num);
        localStorage.setItem("click", num);
    })
}
//else {
//    $(document).on("click", function () {
//        num++;
//        $("#printsHere").html(num);
//        localStorage.setItem("click", num);
//    })
//}