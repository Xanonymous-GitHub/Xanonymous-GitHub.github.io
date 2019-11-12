function item(input) {
    let del_btn = $("<button>");
    let new_item = $("<div>");
    //del_btn.type("button");
    del_btn.addClass("btn btn-danger");
    del_btn.text("Del");
    del_btn.click(function (e) {
        $(this).parent().remove();
    });
    new_item.addClass("mx-2 my-2 to_do_list_title");
    new_item.text(input);
    new_item.css("word-break", "break-all");
    new_item.append(del_btn);
    return new_item;
}
$(function () {
    $("body").css("background-color", "#9400D3");
    $("#new_item").click(function (e) {
        let user_input = $("#input_area").val();
        $("#input_area").val('');
        if (user_input.trim() != "") {
            $("#to_do_list_container").prepend(item(user_input));
        }
        else {
            alert("please input something!")
        }
    });
});