$(function () {
    $("body").css("background-color", "#9400D3");
    $.ajax({
        type:"POST",
        url:"",
        timeout:"4000",
        beforeSend:function(){

        },
        complete:function(){

        },
        success:function(){

        },
        fail:function(){

        },
    });
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            responseObject = JSON.parse(xhr.responseText);
            var newContent = '';
            for (var i = 0; i < responseObject.events.length; i++) {
                //?????
            }
        }
    };
    $("#new_item").click(function (e) {
        e.preventDefault();
        let user_input = $("#input_area").val();
        $("#input_area").val('');
        if (user_input.trim() != "") {
            var $new_item = $("<div\>");
            (function () {
                $new_item.addClass("mx-2 my-2 to_do_list_title");
                $new_item.css("word-break", "break-all");
                $new_item.text(user_input);
                let $del_btn = $("<button\>");
                $del_btn.text("Del");
                $del_btn.addClass("btn btn-danger");
                $del_btn.click(function (e) {
                    $(this).hide();
                    $(this).parent().fadeOut(500);
                    $(this).parent().remove(function () { });
                });
                $new_item.append($del_btn);
            })();
            $("#to_do_list_container").prepend($new_item.hide().fadeIn(600));
        }
        else {
            alert("please input something!")
        }
    });
    xhr.open('GET','../src/test.json',true);
    xhr.send(null);
});